const express = require('express');
const app = express();

// What is 'morgan'?
const logger = require("morgan");
const mongoose = require("mongoose");

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

const db = require("./models");

// set the view engine to ejs // WHat is this?
// app.set('view engine', 'ejs');

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
// Why? What is thei for?
app.use(express.static("public"));

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// Connect to the Mongo DB
// What is 'unit 18 populater'?
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});