const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = app => {
  app.post('/api/traits/', (req, res) => {
    const traits = req.body;

    res.send(req.body);
  });
};

