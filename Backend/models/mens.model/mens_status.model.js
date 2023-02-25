const mongoose = require('mongoose')

let statusSchema = mongoose.Schema({
    haircutcount : { type : Number},
    haircolorcount : { type : Number,},
    hairspacount : { type : Number},
    beardcount : { type : Number}
})

const StatusModel = mongoose.model('menServiceStatus',statusSchema)

module.exports = { StatusModel}