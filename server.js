require('dotenv').config();

const express = require('express');
const Clarifai = require('clarifai');

const multer  = require('multer')
const upload = multer();

const DEMOGRAPHICS_MODEL_ID = 'c0c0ac362b03416da06ab3fa36fb58e3';

const clarifai = new Clarifai.App({
 apiKey: process.env.CLARIFAI_KEY
});

const app = express();
const port = process.env.PORT || 5000;


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/upload', upload.single('myFile'), (req, res) => {
    const file = req.file;
    var img = new Buffer(file.buffer, 'base64');
    const encoded = img.toString('base64');
    clarifai.models.predict(DEMOGRAPHICS_MODEL_ID, encoded)
    .then((response) => {
        const data = response.outputs[0].data.regions;
        const numberOfFaces = data.length;
        const results = data.map(person => {
            const personResult = {};
            personResult.gender = person.data.face.gender_appearance.concepts[0].name;
            personResult.age = person.data.face.age_appearance.concepts[0].name;
            personResult.race = person.data.face.multicultural_appearance.concepts[0].name;
            return personResult;
        })
        return res.send(results);
    })
    .catch(e => res.json({error: e}))
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));