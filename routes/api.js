const express = require("express");
const app = express.Router();
const db = require("../models");

const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: "a57f3ef6",
  application_key: "0e578f4cb6aeabd1e07ab094edc9ac0d"
});

module.exports = app => {
  // Heroku will crash without this line
  // But it ruins parts of the app
  //app.use('/', express.static(path.join(__dirname, '/client/build')));

  app.post('/api/traits/', (req, res) => {
    const traits = req.body;
    console.log("ACL text: ", traits);
    res.send(traits);
  });

  // Get the text from the TAT description
  // Use Aylien API to analyze positive and negative sentiments
  app.post('/api/tats/', (req, res) => {
    const text = req.body.story;
    const pic = req.body.picture;
    let entity = [];
    
    textapi.entityLevelSentiment({
      text: text
    }, function(error, res) {
      if (error === null) {
        console.log("RES entities: ", res.entities);
        entity = res.entities;
      }
      db.Responses.create({picture: pic, story: text, analysis: entity})
        .then((dbResponse)=> {
          console.log("DBRESPONSE-a: ", dbResponse.story);
          console.log("DBRESPONSE-b: ", dbResponse.picture);
        });
    });

  });

  app.get("/api/responses/", function(req, res) {
    db.Responses.find({})
      .then(function(dbResponses) {
        res.json(dbResponses);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

};

