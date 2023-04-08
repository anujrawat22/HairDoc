const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
name : {type : String},
price : {type : String},
poster : {type : String},
serviceType : {type : String},
customerId : {type  : mongoose.Schema.Types.ObjectId, ref : "user"}
})

const CartModel = mongoose.model("Cart",CartSchema)

module.exports = {CartModel}