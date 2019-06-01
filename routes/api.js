const express = require("express");
const router = express.Router();
const db = require("../models");

// Is this supposed to go here?
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: "1409618431272",
  application_key: "0e578f4cb6aeabd1e07ab094edc9ac0d"
});

module.exports = app => {

  app.post('/api/traits/', (req, res) => {
    const traits = req.body;
    res.send(traits);
  });

  // Get the text from the TAT description
  // Use Aylien API to analyze positive and negative sentiments
  app.post('/api/tat/', (req, res) => {
    const text = req.body;
    console.log("TAT text: ", text);
    textapi.sentiment({
      'text': text
    }, function(error, res) {
      if (error === null) {
        console.log(res);
        res.send(res);
      }
    });
  });

};

