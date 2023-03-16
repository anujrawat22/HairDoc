const express = require("express");
const {
  getcolorData,
  searchByColor,
  color_create,
  color_update,
  color_delete,
} = require("../../controller/men_haircolor");

const menHairColorrouter = express.Router();

//  all data of mens spa and hair treatment
menHairColorrouter.get("/", getcolorData);

// data for paticular category
menHairColorrouter.get("/search/:ID", searchByColor);

//  route to create new mens spa and treatment data
menHairColorrouter.post("/create", color_create);

// update any mens spa and tretment data
menHairColorrouter.put("/update/:ID", color_update);

// delete
menHairColorrouter.delete("/delete/:ID", color_delete);

module.exports = { menHairColorrouter };
