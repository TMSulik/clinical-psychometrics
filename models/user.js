const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: String,
    password: String,
    selfDescriptors: [String],
    themes: {
      past: String,
      present: String,
      future: String,
      feelings: String
    }
  }
);

const Person = mongoose.model("Personality", User);

module.exports = Person;