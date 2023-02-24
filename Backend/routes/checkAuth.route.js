const express = require('express')

const checkRouter = express.Router()
checkRouter.use(express.json())

checkRouter.get('/',async(req,res)=>{
    res.send({msg: "authorized"})
})

module.exports = {checkRouter}