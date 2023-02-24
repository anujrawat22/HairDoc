const mongoose = require("mongoose");

const menbeardSchema = mongoose.Schema({
  poster: { type: String },
  name: { type: String },
  price: { type: Number },
  time: { type : Date, default: Date.now },
  rating: { type: Number },
  customerCount: { type: Number },
  facetype : { type : String}
});


const MenbeardModel = mongoose.model('menbeard', menbeardSchema)

module.exports = { MenbeardModel }