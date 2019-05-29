const express = require('express');
// Initialize Express
const app = express();
const mongoose = require("mongoose");

// This has something to do with JSON
const bodyParser = require("body-parser"); 

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;

// const db = require("./models");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Controllers
const router = require("./routes/api.js");
app.use(router);

// Connect to the Mongo DB (shouldn't be mongoHeadlines?)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, function () {
  console.log(`This application is running on port: ${PORT}`);
});