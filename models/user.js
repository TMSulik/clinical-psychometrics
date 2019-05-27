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
  },
  {
    user: "reportsUser",
    pwd: "12345678",
    roles: [
       { role: "read", db: "reporting" },
       { role: "read", db: "products" },
       { role: "read", db: "sales" },
       { role: "readWrite", db: "accounts" }
    ]
  }
);

const Person = mongoose.model("Personality", User);

module.exports = Person;