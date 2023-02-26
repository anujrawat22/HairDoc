const mongoose = require("mongoose");

const womenHairCutSchema = mongoose.Schema({
    poster:{type:String},
    name:{type:String},
    price:{type:Number},
    time:{type:String},
    rating:{type:Number},
    cutomerCount:{type:Number},
    details:[String],
    extra:[{
        pname:String,
        prating:Number,
        pprice:Number,
        ptime:String,
        pdetails:[String]
    }]
})


const womenHairCutModel = mongoose.model("womenHairCut",womenHairCutSchema)

module.exports = {womenHairCutModel}