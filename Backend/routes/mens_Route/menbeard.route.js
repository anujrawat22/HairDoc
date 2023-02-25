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
menBeardrouter.get("/search/:ID",async (req,res)=>{
    const { name } = req.query
    const { ID } = req.params
    const { facetype } = req.query
    try{
        if(ID){
            const data = await MenbeardModel.find({_id : ID})
            res.status(200).send(data)
        }else if(name && facetype){
            const data = await MenbeardModel.find({name,facetype})
            res.status(200).send(data)
        }else if(name){
            const data = await MenbeardModel.find({name})
            res.status(200).send(data)
        }else if(facetype){
            const data = await MenbeardModel.find({facetype})
            res.status(200).send(data)
        }
        
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
menBeardrouter.put("/update/:ID" ,async(req,res)=>{
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
menBeardrouter.delete("/delete/:ID" ,async(req,res)=>{
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