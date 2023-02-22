const mongoose = require("mongoose")

const womenHairSchema = mongoose.Schema({
    hairSpa:[
        {
            poster:{type:String},
            name:{type:String},
            hairLength:{type:String},
            price:{type:Number},
            time:{type:Number},
            rating:{type:Number},
            cutomerCount:{type:Number},
            details:[String]

        }    
    ],

    hairCut:[
        {
            poster:{type:String},
            name:{type:String},
            hairLength:{type:String},
            price:{type:Number},
            time:{type:Number},
            rating:{type:Number},
            cutomerCount:{type:Number},
            details:[String]

        }
    ],

    hairColouring:[
        {   
            poster:{type:String},
            name:{type:String},
            hairLength:{type:String},
            price:{type:Number},
            time:{type:Number},
            rating:{type:Number},
            cutomerCount:{type:Number},
            details:[String]

        }
    ],

    hairTreatment:[
       
        {poster:{type:String},
            name:{type:String},
            hairLength:{type:String},
            price:{type:Number},
            time:{type:Number},
            rating:{type:Number},
            cutomerCount:{type:Number},
            details:[String]
  
        }
    ],

    Bestsaller:[
        {
            poster:{type:String},
            name:{type:String},
            hairLength:{type:String},
            price:{type:Number},
            time:{type:Number},
            rating:{type:Number},
            cutomerCount:{type:Number},
            details:[String]
  
        }
    ]

})

const WomenHairModel = mongoose.model("womenHair",womenHairSchema)

module.exports  = {WomenHairModel}