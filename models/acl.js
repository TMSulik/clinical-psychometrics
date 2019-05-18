const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalitySchema = new Schema({
    modus: { 
      number: Number,
      fav: Number,
      unfav: Number,
      commun: Number
    },
    need: {
      ach: Number,
      dom: Number,
      end: Number,
      ord: Number,
      int: Number,
      nur: Number,
      aff: Number,
      het: Number,
      exh: Number,
      aut: Number,
      agg: Number,
      cha: Number,
      suc: Number,
      aba: Number,
      def: Number
    },
    topical: {
      counsel: Number,
      self_ctl: Number,
      self_cfd: Number,
      adjust: Number,
      ideal: Number,
      creative: Number,
      military: Number,
      masculine: Number,
      feminine: Number
    },
    transactional: {
      critical: Number,
      nurturing: Number,
      adult: Number,
      free: Number,
      adapted: Number
    },
    origence: {
      orig: Number,
      intel: Number
    },
    bigfive: {
      extravert: Number,
      agreeable: Number, 
      conscientious: Number, 
      stable: Number, 
      open: Number
    }
});

const Person = mongoose.model("Personality", PersonalitySchema);

module.exports = Person;