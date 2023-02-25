const express = require('express')
const { StatusModel } = require('../../models/mens.model/mens_status.model')
const StatusRouter = express.Router()

StatusRouter.get("/",async (req,res)=>{
    try{
        const status = await StatusModel.find()
        res.status(200).send(status)
    }catch(err){
        res.send(400).send({"Error" : err})
    }
    
})

StatusRouter.post("/create",async (req,res)=>{
    const payload = req.body
    console.log(payload)
    try{
     const data =await new StatusModel(payload)
     data.save()
     res.status(200).send("Status Created Sucessfully")
    }catch(err){
      res.send(400).send({"Error" : err})
    }
})


StatusRouter.put("/update/:ID",async (req,res)=>{
    const payload = req.body
    const { ID } = req.params
    try{
     await StatusModel.findByIdAndUpdate({_id : ID},payload)
    }catch(err){
      res.send(400).send({"Error" : err})
    }
})

StatusRouter.delete("/delete/:ID",async (req,res)=>{
    const { ID } = req.params

    try{
     await StatusModel.findByIdAndDelete({ _id : ID})
     res.send(200).status({" msg" : "Deleted Sucessfully"})
    }catch(err){
      res.send(400).send({"Error" : err})
    }
})
module.exports = { StatusRouter}