const express = require('express')

const {MenHairModel} = require("../models/men_hair_product.model")

const menrouter = express.Router()

menrouter.use(express.json())



// all data of mens
menrouter.get("/data",async(req,res)=>{
   const data = await MenHairModel.find()
   res.status(200).send(data)
})



// searching mens data by catagory
menrouter.get('/searchByCat',async(req,res)=>{
    const q = req.query
    try{
        let data = await MenHairModel.find({"name":{$regex: '^' + q.name, $options: 'i'}})
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})


// add data
menrouter.post('/create',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new MenHairModel(data);
        await new_data.save();
        res.status(200).send("Model created")
    }
    catch(err){
        res.status(401).send(err)
    }
})


//update data
menrouter.patch("/update/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await MenHairModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await MenHairModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//delete data
menrouter.delete("/delete/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await MenHairModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await MenHairModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

module.exports = {menrouter}