const mongoose = require("mongoose");

const men_hairColor_Schema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  hairLength: { type: String },
  price: { type: Number },
  time: { type: Number },
  rating: { type: Number },
  cutomerCount: { type: Number },
  details: [String],
});


const MenHairColorModel = mongoose.model("menHairColorModel",men_hairColor_Schema)

module.exports = { MenHairColorModel }
