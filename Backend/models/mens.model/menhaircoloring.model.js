const mongoose = require("mongoose");

const men_hairColor_Schema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  price: { type: Number },
  time: { type : Date, default: Date.now },
  rating: { type: Number },
  customerCount: { type: Number }
});


const MenHairColorModel = mongoose.model("menHairColorModel",men_hairColor_Schema)

module.exports = { MenHairColorModel }
