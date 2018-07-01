'use strict'

require('dotenv').config();

const express = require('express');
const Clarifai = require('clarifai');
const path = require('path');
var bodyParser = require('body-parser')
const multer  = require('multer')
const upload = multer();
const app = express();
const port = process.env.PORT || 5000;

const representationService = require('./representationService');
const DEMOGRAPHICS_MODEL_ID = 'c0c0ac362b03416da06ab3fa36fb58e3';

const clarifai = new Clarifai.App({
 apiKey: process.env.CLARIFAI_KEY
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/api/upload', upload.single('myFile'), (req, res) => {
  const file = req.file;
  var img = new Buffer(file.buffer, 'base64');
  const encoded = img.toString('base64');
  clarifai.models.predict(DEMOGRAPHICS_MODEL_ID, encoded)
  .then((response) => {
		const data = response.outputs[0].data.regions;
		if (!data) {
			return res.status(400).json({ error: 'The image you provided does not seem to have faces in it' });
		}
		const { percentYoung, percentMen, percentWhite } = representationService.calculateRepresentations(data);
		const numberOfPeople = data.length;

		return res.send({ numberOfPeople, percentYoung, percentMen, percentWhite });
  })
  .catch(e => res.json({error: e}))
})

app.post('/api/url', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'Url required!' });
  }
  return clarifai.models.predict(DEMOGRAPHICS_MODEL_ID, url)
  .then((response) => {
      const data = response.outputs[0].data.regions;
      if (!data) {
        return res.status(400).json({ error: 'The image you provided does not seem to have faces in it' });
      }
      const { percentYoung, percentMen, percentWhite } = representationService.calculateRepresentations(data);
      const numberOfPeople = data.length;

      return res.send({ numberOfPeople, percentYoung, percentMen, percentWhite });
  })
  .catch(e => res.json({error: e}));
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));