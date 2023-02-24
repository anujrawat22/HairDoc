const express = require('express')

const {womenHairSpaModel} =  require('../models/women/women_hair_spa.model')
const {womenHairCutModel}  = require('../models/women/women_hair_cut')
const {womenHairColorModel} =  require('../models/women/women_hair_color')
const {womenHairTreatmentModel} = require('../models/women/women_hair_treatment')
const {womenHairBestModel} = require('../models/women/women_beststaller')

const womenRouter = express.Router()

womenRouter.use(express.json())

//spa data
womenRouter.get('/HairSpa',async(req,res)=>{
    const data = await womenHairSpaModel.find()
    res.send(data)
})

//cut data
womenRouter.get('/HairCut',async(req,res)=>{
    const data = await womenHairCutModel.find()
    res.send(data)
})

// color data
womenRouter.get('/HairColor',async(req,res)=>{
    const data = await womenHairColorModel.find()
    res.send(data)
})

//treatment
womenRouter.get('/HairTreatment',async(req,res)=>{
    const data = await womenHairTreatmentModel.find()
    res.send(data)
})


//best
womenRouter.get('/HairBest',async(req,res)=>{
    const data = await womenHairBestModel.find()
    res.send(data)
})


//Spa data add
womenRouter.post('/create/HairSpa',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new womenHairSpaModel(data);
        await new_data.save();
        res.send(" created")
    }
    catch(err){
        res.send(err)
    }
})

//cut data add
womenRouter.post('/create/HairCut',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new womenHairCutModel(data);
        await new_data.save();
        res.send(" created")
    }
    catch(err){
        res.send(err)
    }
})

//color data add
womenRouter.post('/create/HairColor',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new womenHairColorModel(data);
        await new_data.save();
        res.send(" created")
    }
    catch(err){
        res.send(err)
    }
})

//HairTreatment data add
womenRouter.post('/create/HairTreatment',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new womenHairTreatmentModel(data);
        await new_data.save();
        res.send(" created")
    }
    catch(err){
        res.send(err)
    }
})

//best data add
womenRouter.post('/create/HairBest',async(req,res)=>{
    const data = req.body
    try{
        const new_data = new womenHairBestModel(data);
        await new_data.save();
        res.send(" created")
    }
    catch(err){
        res.send(err)
    }
})


// spa update data
womenRouter.patch("/update/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//cut update data
womenRouter.patch("/update/HairCut/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await womenHairCutModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairCutModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//color update data
womenRouter.patch("/update/HairColor/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await womenHairColorModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairColorModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//HairTreatment update data
womenRouter.patch("/update/HairTreatment/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await womenHairTreatmentModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairTreatmentModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//best data update
womenRouter.patch("/update/HairBest/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await womenHairBestModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairBestModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})


//spa delete data
womenRouter.delete("/delete/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//spa delete data
womenRouter.delete("/delete/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//spa delete data
womenRouter.delete("/delete/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//spa delete data
womenRouter.delete("/delete/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})


//spa delete data
womenRouter.delete("/delete/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})


//spa delete data
womenRouter.delete("/delete/HairSpa/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairSpaModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairSpaModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

module.exports = {womenRouter}