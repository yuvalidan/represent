'use strict'

require('dotenv').config();

const express = require('express');
const Clarifai = require('clarifai');
const path = require('path');
const multer  = require('multer')
const upload = multer();

const representationService = require('./representationService');
const fake_response = {
    "status": {
      "code": 10000,
      "description": "Ok"
    },
    "outputs": [
      {
        "id": "e412c9153e724283910724208d42c9de",
        "status": {
          "code": 10000,
          "description": "Ok"
        },
        "created_at": "2017-03-31T16:45:27.530506Z",
        "model": {
          "name": "demographics",
          "id": "c0c0ac362b03416da06ab3fa36fb58e3",
          "created_at": "2016-12-23T06:08:44.271674Z",
          "app_id": null,
          "output_info": {
            "message": "Show output_info with: GET /models/{model_id}/output_info",
            "type": "facedetect",
            "type_ext": "facedetect"
          },
          "model_version": {
            "id": "f783f0807c52474c8c6ad20c8cf45fc0",
            "created_at": "2016-12-23T06:08:44.271674Z",
            "status": {
              "code": 21100,
              "description": "Model trained successfully"
            }
          }
        },
        "input": {
          "id": "cee4f671013545ad92585c8f5cb34bca",
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/demographics.jpg"
            }
          }
        },
        "data": {
          "regions": [
            {
              "region_info": {
                "bounding_box": {
                  "top_row": 0.16825931,
                  "left_col": 0.7487846,
                  "bottom_row": 0.28445584,
                  "right_col": 0.82626647
                }
              },
              "data": {
                "face": {
                  "age_appearance": {
                    "concepts": [
                      {
                        "id": "ai_KFWpWmRk",
                        "name": "36",
                        "app_id": null,
                        "value": 0.6135686
                      },
                      {
                        "id": "ai_pm9dFGXp",
                        "name": "37",
                        "app_id": null,
                        "value": 0.5917549
                      },
                      {
                        "id": "ai_Jn5sPpjV",
                        "name": "38",
                        "app_id": null,
                        "value": 0.57373714
                      },
                      {
                        "id": "ai_3QlM0LQG",
                        "name": "35",
                        "app_id": null,
                        "value": 0.55896306
                      },
                      {
                        "id": "ai_XCS0ZXlc",
                        "name": "39",
                        "app_id": null,
                        "value": 0.5468528
                      },
                      {
                        "id": "ai_prhRGPd1",
                        "name": "34",
                        "app_id": null,
                        "value": 0.5366764
                      },
                      {
                        "id": "ai_9SgNdvCZ",
                        "name": "33",
                        "app_id": null,
                        "value": 0.49645227
                      },
                      {
                        "id": "ai_t7C4Hfmm",
                        "name": "29",
                        "app_id": null,
                        "value": 0.39816839
                      },
                      {
                        "id": "ai_tzZdX8VP",
                        "name": "30",
                        "app_id": null,
                        "value": 0.39721933
                      },
                      {
                        "id": "ai_wpbCDvCQ",
                        "name": "40",
                        "app_id": null,
                        "value": 0.3952093
                      },
                      {
                        "id": "ai_z2K094hx",
                        "name": "31",
                        "app_id": null,
                        "value": 0.38469896
                      },
                      {
                        "id": "ai_J5NgRLQ1",
                        "name": "28",
                        "app_id": null,
                        "value": 0.38431287
                      },
                      {
                        "id": "ai_1qNCjBCW",
                        "name": "27",
                        "app_id": null,
                        "value": 0.3563841
                      },
                      {
                        "id": "ai_KG4tcMLc",
                        "name": "32",
                        "app_id": null,
                        "value": 0.35377282
                      },
                      {
                        "id": "ai_Lq29DpjP",
                        "name": "41",
                        "app_id": null,
                        "value": 0.27557328
                      },
                      {
                        "id": "ai_hCkCX508",
                        "name": "26",
                        "app_id": null,
                        "value": 0.2493424
                      },
                      {
                        "id": "ai_81J6NJF3",
                        "name": "25",
                        "app_id": null,
                        "value": 0.19841295
                      },
                      {
                        "id": "ai_VtPhMhJv",
                        "name": "42",
                        "app_id": null,
                        "value": 0.1831603
                      },
                      {
                        "id": "ai_fFJR7TwD",
                        "name": "24",
                        "app_id": null,
                        "value": 0.15558654
                      },
                      {
                        "id": "ai_DK5PKzTt",
                        "name": "44",
                        "app_id": null,
                        "value": 0.1187873
                      }
                    ]
                  },
                  "gender_appearance": {
                    "concepts": [
                      {
                        "id": "ai_zgR2BBt0",
                        "name": "feminine",
                        "app_id": null,
                        "value": 0.99994504
                      },
                      {
                        "id": "ai_cVWr8NK5",
                        "name": "masculine",
                        "app_id": null,
                        "value": 0.000055025565
                      }
                    ]
                  },
                  "multicultural_appearance": {
                    "concepts": [
                      {
                        "id": "ai_l9ngrR28",
                        "name": "hispanic, latino, or spanish origin",
                        "app_id": null,
                        "value": 0.31721005
                      },
                      {
                        "id": "ai_r5F00Gqn",
                        "name": "white",
                        "app_id": null,
                        "value": 0.27634108
                      },
                      {
                        "id": "ai_659b6V0v",
                        "name": "asian",
                        "app_id": null,
                        "value": 0.10594337
                      },
                      {
                        "id": "ai_bZft5m0H",
                        "name": "middle eastern or north african",
                        "app_id": null,
                        "value": 0.080307364
                      },
                      {
                        "id": "ai_WWxnB3mw",
                        "name": "american indian or alaska native",
                        "app_id": null,
                        "value": 0.06412915
                      },
                      {
                        "id": "ai_wScNwk9Z",
                        "name": "black or african american",
                        "app_id": null,
                        "value": 0.0046275854
                      },
                      {
                        "id": "ai_1qp01psl",
                        "name": "native hawaiian or pacific islander",
                        "app_id": null,
                        "value": 0.0023981696
                      }
                    ]
                  }
                }
              }
            },
            {
              "region_info": {
                "bounding_box": {
                  "top_row": 0.2453154,
                  "left_col": 0.42262903,
                  "bottom_row": 0.36598992,
                  "right_col": 0.50308776
                }
              },
              "data": {
                "face": {
                  "age_appearance": {
                    "concepts": [
                      {
                        "id": "ai_XCS0ZXlc",
                        "name": "39",
                        "app_id": null,
                        "value": 0.5270184
                      },
                      {
                        "id": "ai_Jn5sPpjV",
                        "name": "38",
                        "app_id": null,
                        "value": 0.52122265
                      },
                      {
                        "id": "ai_pm9dFGXp",
                        "name": "37",
                        "app_id": null,
                        "value": 0.51472735
                      },
                      {
                        "id": "ai_KFWpWmRk",
                        "name": "36",
                        "app_id": null,
                        "value": 0.49871486
                      },
                      {
                        "id": "ai_wpbCDvCQ",
                        "name": "40",
                        "app_id": null,
                        "value": 0.44609255
                      },
                      {
                        "id": "ai_3QlM0LQG",
                        "name": "35",
                        "app_id": null,
                        "value": 0.42296755
                      },
                      {
                        "id": "ai_prhRGPd1",
                        "name": "34",
                        "app_id": null,
                        "value": 0.4014062
                      },
                      {
                        "id": "ai_Lq29DpjP",
                        "name": "41",
                        "app_id": null,
                        "value": 0.38118497
                      },
                      {
                        "id": "ai_9SgNdvCZ",
                        "name": "33",
                        "app_id": null,
                        "value": 0.3669945
                      },
                      {
                        "id": "ai_VtPhMhJv",
                        "name": "42",
                        "app_id": null,
                        "value": 0.32986593
                      },
                      {
                        "id": "ai_tzZdX8VP",
                        "name": "30",
                        "app_id": null,
                        "value": 0.29687262
                      },
                      {
                        "id": "ai_t7C4Hfmm",
                        "name": "29",
                        "app_id": null,
                        "value": 0.29307002
                      },
                      {
                        "id": "ai_z2K094hx",
                        "name": "31",
                        "app_id": null,
                        "value": 0.28373855
                      },
                      {
                        "id": "ai_DK5PKzTt",
                        "name": "44",
                        "app_id": null,
                        "value": 0.2801849
                      },
                      {
                        "id": "ai_J5NgRLQ1",
                        "name": "28",
                        "app_id": null,
                        "value": 0.2763781
                      },
                      {
                        "id": "ai_9f5g2Wgg",
                        "name": "43",
                        "app_id": null,
                        "value": 0.27049914
                      },
                      {
                        "id": "ai_KG4tcMLc",
                        "name": "32",
                        "app_id": null,
                        "value": 0.264569
                      },
                      {
                        "id": "ai_1qNCjBCW",
                        "name": "27",
                        "app_id": null,
                        "value": 0.25033242
                      },
                      {
                        "id": "ai_4w8KM6Rd",
                        "name": "45",
                        "app_id": null,
                        "value": 0.23091303
                      },
                      {
                        "id": "ai_fbRxTRbd",
                        "name": "46",
                        "app_id": null,
                        "value": 0.17809989
                      }
                    ]
                  },
                  "gender_appearance": {
                    "concepts": [
                      {
                        "id": "ai_zgR2BBt0",
                        "name": "masculine",
                        "app_id": null,
                        "value": 0.99839365
                      },
                      {
                        "id": "ai_cVWr8NK5",
                        "name": "feminine",
                        "app_id": null,
                        "value": 0.0016063403
                      }
                    ]
                  },
                  "multicultural_appearance": {
                    "concepts": [
                      {
                        "id": "ai_r5F00Gqn",
                        "name": "white",
                        "app_id": null,
                        "value": 0.9689671
                      },
                      {
                        "id": "ai_WWxnB3mw",
                        "name": "american indian or alaska native",
                        "app_id": null,
                        "value": 0.035197362
                      },
                      {
                        "id": "ai_l9ngrR28",
                        "name": "hispanic, latino, or spanish origin",
                        "app_id": null,
                        "value": 0.009590663
                      },
                      {
                        "id": "ai_wScNwk9Z",
                        "name": "black or african american",
                        "app_id": null,
                        "value": 0.0020359796
                      },
                      {
                        "id": "ai_659b6V0v",
                        "name": "asian",
                        "app_id": null,
                        "value": 0.0014642342
                      },
                      {
                        "id": "ai_bZft5m0H",
                        "name": "middle eastern or north african",
                        "app_id": null,
                        "value": 0.0013063566
                      },
                      {
                        "id": "ai_1qp01psl",
                        "name": "native hawaiian or pacific islander",
                        "app_id": null,
                        "value": 0.00020323443
                      }
                    ]
                  }
                }
              }
            },
            {
              "region_info": {
                "bounding_box": {
                  "top_row": 0.23697253,
                  "left_col": 0.09574099,
                  "bottom_row": 0.40198824,
                  "right_col": 0.20563057
                }
              },
              "data": {
                "face": {
                  "age_appearance": {
                    "concepts": [
                      {
                        "id": "ai_XCS0ZXlc",
                        "name": "39",
                        "app_id": null,
                        "value": 0.42895025
                      },
                      {
                        "id": "ai_4w8KM6Rd",
                        "name": "45",
                        "app_id": null,
                        "value": 0.42206228
                      },
                      {
                        "id": "ai_wpbCDvCQ",
                        "name": "40",
                        "app_id": null,
                        "value": 0.4101557
                      },
                      {
                        "id": "ai_DK5PKzTt",
                        "name": "44",
                        "app_id": null,
                        "value": 0.4028455
                      },
                      {
                        "id": "ai_Lq29DpjP",
                        "name": "41",
                        "app_id": null,
                        "value": 0.39682895
                      },
                      {
                        "id": "ai_Jn5sPpjV",
                        "name": "38",
                        "app_id": null,
                        "value": 0.39403355
                      },
                      {
                        "id": "ai_VtPhMhJv",
                        "name": "42",
                        "app_id": null,
                        "value": 0.38460547
                      },
                      {
                        "id": "ai_fbRxTRbd",
                        "name": "46",
                        "app_id": null,
                        "value": 0.3839248
                      },
                      {
                        "id": "ai_9f5g2Wgg",
                        "name": "43",
                        "app_id": null,
                        "value": 0.36395252
                      },
                      {
                        "id": "ai_9stlV794",
                        "name": "47",
                        "app_id": null,
                        "value": 0.3464582
                      },
                      {
                        "id": "ai_pm9dFGXp",
                        "name": "37",
                        "app_id": null,
                        "value": 0.34094813
                      },
                      {
                        "id": "ai_4124wHvG",
                        "name": "48",
                        "app_id": null,
                        "value": 0.32203597
                      },
                      {
                        "id": "ai_B42sCp6t",
                        "name": "49",
                        "app_id": null,
                        "value": 0.31075436
                      },
                      {
                        "id": "ai_wDDRSlqF",
                        "name": "50",
                        "app_id": null,
                        "value": 0.29185486
                      },
                      {
                        "id": "ai_KFWpWmRk",
                        "name": "36",
                        "app_id": null,
                        "value": 0.29057163
                      },
                      {
                        "id": "ai_9DCQKqhJ",
                        "name": "51",
                        "app_id": null,
                        "value": 0.27192146
                      },
                      {
                        "id": "ai_cPX160mW",
                        "name": "52",
                        "app_id": null,
                        "value": 0.25814778
                      },
                      {
                        "id": "ai_0MwHlcbx",
                        "name": "53",
                        "app_id": null,
                        "value": 0.22905685
                      },
                      {
                        "id": "ai_38qJ9qlS",
                        "name": "55",
                        "app_id": null,
                        "value": 0.22618978
                      },
                      {
                        "id": "ai_Mp3n0xln",
                        "name": "54",
                        "app_id": null,
                        "value": 0.21554923
                      }
                    ]
                  },
                  "gender_appearance": {
                    "concepts": [
                      {
                        "id": "ai_zgR2BBt0",
                        "name": "masculine",
                        "app_id": null,
                        "value": 0.98789436
                      },
                      {
                        "id": "ai_cVWr8NK5",
                        "name": "feminine",
                        "app_id": null,
                        "value": 0.012105603
                      }
                    ]
                  },
                  "multicultural_appearance": {
                    "concepts": [
                      {
                        "id": "ai_wScNwk9Z",
                        "name": "black or african american",
                        "app_id": null,
                        "value": 0.8512239
                      },
                      {
                        "id": "ai_659b6V0v",
                        "name": "asian",
                        "app_id": null,
                        "value": 0.1023449
                      },
                      {
                        "id": "ai_l9ngrR28",
                        "name": "hispanic, latino, or spanish origin",
                        "app_id": null,
                        "value": 0.03285998
                      },
                      {
                        "id": "ai_bZft5m0H",
                        "name": "middle eastern or north african",
                        "app_id": null,
                        "value": 0.017999522
                      },
                      {
                        "id": "ai_WWxnB3mw",
                        "name": "american indian or alaska native",
                        "app_id": null,
                        "value": 0.012656894
                      },
                      {
                        "id": "ai_1qp01psl",
                        "name": "native hawaiian or pacific islander",
                        "app_id": null,
                        "value": 0.0043885726
                      },
                      {
                        "id": "ai_r5F00Gqn",
                        "name": "white",
                        "app_id": null,
                        "value": 0.0039115837
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }
    ]
  }
  
const DEMOGRAPHICS_MODEL_ID = 'c0c0ac362b03416da06ab3fa36fb58e3';

const clarifai = new Clarifai.App({
 apiKey: process.env.CLARIFAI_KEY
});

const app = express();
const port = process.env.PORT || 5000;


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'https://represent-app.herokuapp.com/');

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
    // clarifai.models.predict(DEMOGRAPHICS_MODEL_ID, encoded)
    // .then((response) => {
        const response = fake_response;
        const data = response.outputs[0].data.regions;
        const { percentYoung, percentMen, percentWhite } = representationService.calculateRepresentations(data);
        const numberOfPeople = data.length;

        return res.send({ numberOfPeople, percentYoung, percentMen, percentWhite });
    // })
    // .catch(e => res.json({error: e}))
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`Listening on port ${port}`));