const { MenHaircutModel } = require("../models/mens.model/menhaircut.model");


exports.get_haircut_data = async (req, res) => {
  try {
    const data = await MenHaircutModel.find()
    res.status(200).send(data);
  } catch (err) {
    res.status(401).send({ Error: err });
  }
};

exports.get_haircutData_byId = async (req, res) => {
  const { name } = req.query;
  const { category } = req.query;
  const { ID } = req.params;
  try {
    if (name) {
      const data = await MenHaircutModel.find({ name: name });
      res.status(200).send(data);
    } else if (category) {
      const data = await MenHaircutModel.find({ hairLength: category });
      res.status(200).send(data);
    } else if (name && category) {
      const data = await MenHaircutModel.find({
        name: name,
        hairLength: category,
      });
      res.status(200).send(data);
    } else if (ID) {
      const data = await MenHaircutModel.find({ _id: ID });
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(401).send({ Error: err });
  }
};


exports.create_haircut = async(req,res)=>{
    const payload = req.body
  
    try{
  
      const data = new MenHaircutModel(payload)
      await data.save()
      res.status(200).send("Data added sucessfully")
    }catch(err){
      res.status(401).send({"Error" : err})
    }
  }


  exports.update_haircut = async(req,res)=>{
    const ID = req.params.ID
    const payload = req.body

    try{
        const app = await MenHaircutModel.findOne({_id:ID})
        if(app){
            await MenHaircutModel.findByIdAndUpdate({_id : ID},payload)
            res.status(200).send("Updation Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
}

exports.delete_haricut = async(req,res)=>{
    const ID = req.params.ID
    

    try{
        const app = await MenHaircutModel.findOne({_id:ID})
        if(app){
            await MenHaircutModel.findByIdAndDelete({_id : ID})
            res.status(200).send("Deletion Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
}