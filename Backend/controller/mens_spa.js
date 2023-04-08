const { MenSpaandTreatment } = require("../models/mens.model/men_spa_treatment.model");


exports.get_spaData = async (req, res) => {
  try {
    const data = await MenSpaandTreatment.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(401).send({ Error: err });
  }
};

exports.get_spaData_byId = async (req, res) => {
  const { name } = req.query;
  const { ID } = req.params;
  try {
    if (ID) {
      const data = await MenSpaandTreatment.find({ _id: ID });
      res.status(200).send(data);
    } else {
      const data = await MenSpaandTreatment.find({ name: name });
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(401).send({ Error: err });
  }
};


exports.create_spaData = async(req,res)=>{
    const payload = req.body
  
    try{
  
      const data = new MenSpaandTreatment(payload)
      await data.save()
      res.status(200).send("Data added sucessfully")
    }catch(err){
      res.status(401).send({"Error" : err})
    }
  }


  exports.update_spaData =  async(req,res)=>{
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
}


exports.delete_spaData =  async(req,res)=>{
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
}