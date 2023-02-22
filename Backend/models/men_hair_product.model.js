const mongoose = require("mongoose")

const menHairSchema = mongoose.Schema({
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

const MenHairModel = mongoose.model("menHair",menHairSchema)

module.exports  = {MenHairModel}