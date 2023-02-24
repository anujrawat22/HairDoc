const mongoose = require("mongoose");

const menhairSchema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  hairLength: { type: String },
  price: { type: Number },
  time: { type: Number },
  rating: { type: Number },
  cutomerCount: { type: Number },
  details: [String],
});


const MenHaircutModel = mongoose.model('menhaircut', menhairSchema)

module.exports = {MenHaircutModel}