const mongoose = require('mongoose');
// This will connect to the database on cloud.mongodb
const URI = require('../config/index');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/psychometrics";

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI || URI, { 
	useNewUrlParser: true,
	useUnifiedTopology: true 
});

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});

// Exporting an object containing all of the application modules
// This was not part of the mern example app
// Maybe this is supposed to go in config/index
module.exports = {
  User: require("./User"),
  Responses: require("./Responses")
};

