const mongoose = require("mongoose");

const menhairSchema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  hairLength: { type: String },
  price: { type: Number },
  time : { type : Date, default: Date.now },
  rating: { type: Number },
  cutomerCount: { type: Number },
  details: { type: String },
});


const MenHaircutModel = mongoose.model('menhaircut', menhairSchema)

module.exports = {MenHaircutModel}