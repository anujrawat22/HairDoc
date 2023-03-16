const express = require("express")
const { get_spaData, get_spaData_byId, create_spaData, update_spaData, delete_spaData } = require("../../controller/mens_spa")

const mensparouter = express.Router()
 





//  all data of mens spa and hair treatment
mensparouter.get("/",get_spaData)



// data for paticular category
mensparouter.get("/search/:ID",get_spaData_byId)




//  route to create new mens spa and treatment data
mensparouter.post("/create", create_spaData)



// update any mens spa and tretment data
mensparouter.put("/update/:ID" , update_spaData)


// delete
mensparouter.delete("/delete/:ID" , delete_spaData)

module.exports = { mensparouter }