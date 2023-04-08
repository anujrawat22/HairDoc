const mongoose = require("mongoose");

const menSpaandTreatmentSchema = mongoose.Schema({
  name: { type: String },
  memberprice: { type: Number },
  time: { type : Date, default: Date.now },
  rating: { type: Number },
  customerCount: { type: Number },
  price : { type : Number}
});


const MenSpaandTreatment = mongoose.model("MenSpaAndTreatment",menSpaandTreatmentSchema)

module.exports = {MenSpaandTreatment}