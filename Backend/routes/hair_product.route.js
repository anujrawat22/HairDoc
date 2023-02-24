const express = require('express')

const {womenHairSpaModel} =  require('../models/women/women_hair_spa.model')
const {womenHairCutModel}  = require('../models/women/women_hair_cut')
const {womenHairColorModel} =  require('../models/women/women_hair_color')
const {womenHairTreatmentModel} = require('../models/women/women_hair_treatment')
const {womenHairBestModel} = require('../models/women/women_beststaller')

const {authenticate} = require('../middlewares/authentication')

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
womenRouter.post('/create/HairSpa',authenticate,async(req,res)=>{
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
womenRouter.post('/create/HairCut',authenticate,async(req,res)=>{
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
womenRouter.post('/create/HairColor',authenticate,async(req,res)=>{
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
womenRouter.post('/create/HairTreatment',authenticate,async(req,res)=>{
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
womenRouter.post('/create/HairBest',authenticate,async(req,res)=>{
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
womenRouter.patch("/update/HairSpa/:appId",authenticate, async(req,res)=>{
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
womenRouter.patch("/update/HairCut/:appId",authenticate, async(req,res)=>{
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
womenRouter.patch("/update/HairColor/:appId",authenticate, async(req,res)=>{
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
womenRouter.patch("/update/HairTreatment/:appId",authenticate, async(req,res)=>{
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
womenRouter.patch("/update/HairBest/:appId",authenticate, async(req,res)=>{
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
womenRouter.delete("/delete/HairSpa/:appId",authenticate, async(req,res)=>{
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

//cut delete data
womenRouter.delete("/delete/HairCut/:appId",authenticate, async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairCutModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairCutModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//color delete data
womenRouter.delete("/delete/HairColor/:appId",authenticate, async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairColorModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairColorModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//hairtreatment delete data
womenRouter.delete("/delete/HairTreatment/:appId",authenticate, async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairTreatmentModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairTreatmentModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})


//best delete data
womenRouter.delete("/delete/HairBest/:appId",authenticate, async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await womenHairBestModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await womenHairBestModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})


module.exports = {womenRouter}