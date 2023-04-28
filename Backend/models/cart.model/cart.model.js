const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
name : {type : String,required : true},
price : {type : String,required : true},
poster : {type : String},
serviceType : {type : String,required : true},
customerId : {type  : mongoose.Schema.Types.ObjectId, ref : "user"}
})

const CartModel = mongoose.model("Cart",CartSchema)

module.exports = {CartModel}