const mongoose = require("mongoose");

const womenColorSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    hairLength:{type:String},
    price:{type:Number},
    time:{type:String},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String],
    
})


const womenHairColorModel = mongoose.model("womenHairColor",womenColorSchema)

module.exports = {womenHairColorModel}