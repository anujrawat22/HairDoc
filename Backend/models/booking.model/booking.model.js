const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  cartItems: [
    {
      name: { type: String },
      price: { type: String },
      poster: { type: String },
      serviceType: { type: String },
    },
  ],
  totalAmount: { type: Number },
  time : {type : Date,default : Date.now()}
});

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = { BookingModel };
