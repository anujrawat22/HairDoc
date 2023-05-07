const { BookingModel } = require("../models/booking.model/booking.model");

exports.getUserBooking = async (req, res) => {
  try {
    const { UserId } = req.body;
    const Booking = await BookingModel.findOne({ UserId });
    if (Booking) {
      return res.status(404).send({ msg: "No Booking details found" });
    }
    res
      .status(201)
      .send({ msg: `Booking Details of UserID : ${UserId}`, Booking });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: "Server Error" });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const { UserId, cartItems, totalAmount } = req.body;
    const Booking = await new BookingModel({UserId,cartItems,totalAmount})
    Booking.save()
    res.status(200).send({msg : "Booking created sucessfully"})
  } catch (error) {}
};

// exports.updateBooking = async (req, res) => {
//   try {
//     const {id} = req.params
//     const {UserId} = req.body;
//     const Booking = await BookingModel.findOne({UserId})
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ Error: "Server Error" });
//   }
// };

exports.deleteBooking = async (req, res) => {
  try {
      const {id} = req.params
      const {UserId} = req.body;
      const booking = await BookingModel.find({UserId})
      if(booking){
        await BookingModel.findByIdAndDelete(id)
        return res.status(201).send({msg : "Booking deleted sucessfully"})
      }
      res.status(401).send({msg : "Unauthorized"})
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: "Server Error" });
  }
};
