const express = require("express")
const { getUserBooking, createBooking, updateBooking, deleteBooking } = require("../controller/booking")

const BookingRouter = express.Router()

BookingRouter.get("/",getUserBooking)


BookingRouter.post("/",createBooking)


BookingRouter.patch("/update/:id",updateBooking)

BookingRouter.delete("/delete/:id",deleteBooking)
module.exports = {BookingRouter}