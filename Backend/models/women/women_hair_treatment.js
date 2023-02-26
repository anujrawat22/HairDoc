const mongoose = require("mongoose");

const womenHairTreatmentSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    hairLength:{type:String},
    price:{type:Number},
    time:{type:String},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String]
})


const womenHairTreatmentModel = mongoose.model("womenHairTreatment",womenHairTreatmentSchema)

module.exports = {womenHairTreatmentModel}