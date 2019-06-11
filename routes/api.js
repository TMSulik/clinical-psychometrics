const express = require("express");
const router = express.Router();
const db = require("../models");

// Is this supposed to go here?
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: "a57f3ef6",
  application_key: "0e578f4cb6aeabd1e07ab094edc9ac0d"
});

// const unirest = require('unirest');

// unirest.post(API_URL)
//   .header("X-RapidAPI-Key", API_KEY)
//   .end(function (result) {
//     console.log(result.status, result.headers, result.body);
//   });

module.exports = app => {

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

    // Unit 18 Activity 19 populate exercise
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


  // app.get("/api/stories", (req, res) => {
  //   db.User.find({})
  //     .then(function (dbStories) {
  //       let hbsObject;
  //       hbsObject = {
  //         stories: dbStories
  //       };
  //       res.render("stories", hbsObject);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });

};

