const express = require('express');
const app = express();
const mongoose = require("mongoose");

// This has something to do with converting objects to JSON
const bodyParser = require("body-parser"); 

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;
//const PORT = process.env.PORT || 5000;

// const db = require("./models");

// Use body-parser for handling form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Controllers
require("./routes/api")(app);
// app.use(router);

// Connect to the Mongo DB 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/psychometrics";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)
  .then(()=>console.log("Mongo Connected"))
  .catch(err => console.error(err));

// if (process.env.NODE_ENV === 'production') {
//   app.get(/^\/(?!api).*/, (req, res) => {
//     // don't serve react app to api routes
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// };

// Start the server
app.listen(PORT, function () {
  console.log(`This application is running on port: ${PORT}`);
});

// app.listen(process.env.PORT || 5000);