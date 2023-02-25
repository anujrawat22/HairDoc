const express = require("express")

const mensparouter = express.Router()
 const { MenSpaandTreatment } = require("../../models/mens.model/men_spa_treatment.model")





//  all data of mens spa and hair treatment
mensparouter.get("/",async (req,res)=>{
    try{
        const data = await MenSpaandTreatment.find()
        res.status(200).send(data)
    }
    catch(err){
        res.status(401).send({"Error" : err})
    }
  

})



// data for paticular category
mensparouter.get("/search/:ID",async (req,res)=>{
    const { name } = req.query
    const { ID } = req.params
    try{
        if(ID){
            const data = await MenSpaandTreatment.find({_id : ID})
        res.status(200).send(data)
        }else{
            const data = await MenSpaandTreatment.find({'name' : name})
            res.status(200).send(data)
        }
        
    }
    catch(err){
        res.status(401).send({"Error" : err})
    }
  

})




//  route to create new mens spa and treatment data
mensparouter.post("/create", async(req,res)=>{
  const payload = req.body

  try{

    const data = new MenSpaandTreatment(payload)
    await data.save()
    res.status(200).send("Data added sucessfully")
  }catch(err){
    res.status(401).send({"Error" : err})
  }
})



// update any mens spa and tretment data
mensparouter.put("/update/:ID" ,async(req,res)=>{
    const ID = req.params.ID
    const payload = req.body

    try{
        const app = await MenSpaandTreatment.findOne({_id:ID})
        if(app){
            await MenSpaandTreatment.findByIdAndUpdate({_id : ID},payload)
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
mensparouter.delete("/delete/:ID" ,async(req,res)=>{
    const ID = req.params.ID
    

    try{
        const app = await MenSpaandTreatment.findOne({_id:ID})
        if(app){
            await MenSpaandTreatment.findByIdAndDelete({_id : ID})
            res.status(200).send("Deletion Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
})

module.exports = { mensparouter }