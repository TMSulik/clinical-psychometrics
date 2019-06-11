const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  // password: String,
  userCreated: {
    type: Date,
    default: Date.now
  },
  // `lastUpdated` must be of type Date
  lastUpdated: Date,
  selfDescriptors: [String],
  stories: [String]
});

// Custom method `lastUpdatedDate`
UserSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
