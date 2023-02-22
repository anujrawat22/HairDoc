const mongoose = require("mongoose")

const userInfoSchema  =  mongoose.Schema({
    userId:String,
    city:String,
    address:String,
    pincode:Number,
    cardDetails:[
        {
            cardNumber:String,
            cardHolderName:String,
        }
    ],

})

const UserInfoModel =  mongoose.model("user",userInfoSchema)

module.exports = {UserInfoModel}