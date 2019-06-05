const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: String,
  selfDescriptors: [String],
  story: String
});

const User = mongoose.model("Personality", UserSchema);

module.exports = User;
