const mongoose = require("mongoose");

const menbeardSchema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  hairLength: { type: String },
  price: { type: Number },
  time: { type: Number },
  rating: { type: Number },
  cutomerCount: { type: Number },
  details: [String],
  facetype : { type : String}
});


const MenbeardModel = mongoose.model('menbeard', menbeardSchema)

module.exports = { MenbeardModel }