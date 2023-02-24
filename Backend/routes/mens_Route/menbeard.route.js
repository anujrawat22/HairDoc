const express = require("express")

const menBeardrouter = express.Router()
 const { MenbeardModel } = require("../../models/mens.model/menbeardcut.model")





//  all data of mens spa and hair treatment
menBeardrouter.get("/",async (req,res)=>{
    try{
        const data = await MenbeardModel.find()
        res.status(200).send(data)
    }
    catch(err){
        res.status(401).send({"Error" : err})
    }
  

})



// data for paticular category
menBeardrouter.get("/search",async (req,res)=>{
    const { name } = req.query
    try{
        const data = await MenbeardModel.find({'name' : name})
        res.status(200).send(data)
    }
    catch(err){
        res.status(401).send({"Error" : err})
    }
  

})




//  route to create new mens spa and treatment data
menBeardrouter.post("/create", async(req,res)=>{
  const payload = req.body

  try{

    const data = new MenbeardModel(payload)
    await data.save()
    res.status(200).send("Data added sucessfully")
  }catch(err){
    res.status(401).send({"Error" : err})
  }
})



// update any mens spa and tretment data
menBeardrouter.post("/update/:ID" ,async(req,res)=>{
    const ID = req.params.ID
    const payload = req.body

    try{
        const app = await MenbeardModel.findOne({_id:ID})
        if(app){
            await MenbeardModel.findByIdAndUpdate({_id : ID},payload)
            res.status(200).send("Updation Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
})


// delete
menBeardrouter.post("/delete/:ID" ,async(req,res)=>{
    const ID = req.params.ID
    

    try{
        const app = await MenbeardModel.findOne({_id:ID})
        if(app){
            await MenbeardModel.findByIdAndDelete({_id : ID})
            res.status(200).send("Deletion Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
})

module.exports = { menBeardrouter }