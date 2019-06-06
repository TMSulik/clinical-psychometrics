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


    console.log("REQ BODY: ", req.body);
    console.log("TEXT: ", Object.keys(req.body)[0]);
    const text = Object.keys(req.body)[0];
    //console.log("TAT text: ", text);
    //console.log("API: ", textapi);
    textapi.entityLevelSentiment({
    // textapi.sentiment({
      'text': text
    }, function(error, res) {
      if (error === null) {
        console.log("RES entities: ", res.entities);
        // console.log("RES sentiment: ", res);
        console.log("Entity: ", res.entities[0].mentions[0].text);
        // console.log("Sentiment: ", res.entities[7].overall_sentiment);
        // console.log("Type: ", res.entities[7].type);

        // res.send(res);
      }
    });
    db.Responses.create({story: text})
      .then((dbResponse)=> {
        console.log("DBRESPONSE: ", dbResponse);
      });
      // Unit 18 Activity 19 populate exercise
  });

};

