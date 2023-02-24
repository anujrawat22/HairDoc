const mongoose = require("mongoose");

const womenSpaSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    hairLength:{type:String},
    price:{type:Number},
    time:{type:Number},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String]
})


const womenHairSpaModel = mongoose.model("/womenHairSpa",womenSpaSchema)

module.exports = {womenHairSpaModel}