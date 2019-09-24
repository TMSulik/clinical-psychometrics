const express = require('express');
const app = express();
// This has something to do with converting objects to JSON
const bodyParser = require("body-parser"); 

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;

// require db connection
require('./models');

// Use body-parser for handling form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Controllers
require("./routes/api")(app);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, function () {
  console.log(`This application is running on port: ${PORT}`);
});
