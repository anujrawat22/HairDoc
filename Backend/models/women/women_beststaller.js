const mongoose = require("mongoose");

const womenHairBestSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    hairLength:{type:String},
    price:{type:Number},
    time:{type:String},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String]
})


const womenHairBestModel = mongoose.model("/womenHairBest",womenHairBestSchema)

module.exports = {womenHairBestModel}