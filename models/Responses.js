const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponsesSchema = new Schema({

  story: String
  // acl: [String],
  // tat: {
  //   pictureNumber: Number,
  //   response: String,
  //   analysis: [
  //     {
  //       entity: String,
  //       mentions: Number,
  //       type: String,
  //       overall_sentiment: {
  //         polarity: String,
  //         confidence: Number
  //       }
  //     }
  //   ]
  // }
});

const Responses = mongoose.model("Responses", ResponsesSchema);
module.exports = Responses;