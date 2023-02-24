const mongoose = require("mongoose");

const womenHairCutSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    hairLength:{type:String},
    price:{type:Number},
    time:{type:Number},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String]
})


const womenHairCutModel = mongoose.model("/womenHairCut",womenHairCutSchema)

module.exports = {womenHairCutModel}