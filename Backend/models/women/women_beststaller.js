const mongoose = require("mongoose");

const womenHairBestSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    hairLength:{type:String},
    price:{type:Number},
    time:{type:Number},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String]
})


const womenHairBestModel = mongoose.model("/womenHairBest",womenHairBestSchema)

module.exports = {womenHairBestModel}