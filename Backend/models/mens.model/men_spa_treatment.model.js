const mongoose = require("mongoose");

const menSpaandTreatmentSchema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  hairLength: { type: String },
  price: { type: Number },
  time: { type: Number },
  rating: { type: Number },
  cutomerCount: { type: Number },
  details: [String],
});


const MenSpaandTreatment = mongoose.model("MenSpaAndTreatment",menSpaandTreatmentSchema)

module.exports = {MenSpaandTreatment}