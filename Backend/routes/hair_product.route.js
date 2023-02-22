const express = require('express')

const {WomenHairModel} = require('../models/hair_product.model')

const womenRouter = express.Router()

womenRouter.use(express.json())

//all data
womenRouter.get('/alldata',async(req,res)=>{
    const data = await WomenHairModel.find()
    res.send(data)
})

//search by category
womenRouter.get('/searchByCat',async(req,res)=>{
    const q = req.query
    try{
        let data = await WomenHairModel.find({"name":{$regex: '^' + q.name, $options: 'i'}})
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})

//add data
womenRouter.post('/create',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new WomenHairModel(data);
        await new_data.save();
        res.send(" created")
    }
    catch(err){
        res.send(err)
    }
})

//update data
womenRouter.patch("/update/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await WomenHairModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await WomenHairModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//delete data
womenRouter.delete("/delete/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await WomenHairModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await WomenHairModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

module.exports = {womenRouter}