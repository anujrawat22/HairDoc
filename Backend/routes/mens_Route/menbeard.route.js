const express = require("express")
const { get_breadData, get_beardData_byID, create_beardData, update_beardData, delete_beardData } = require("../../controller/menbeard")

const menBeardrouter = express.Router()






//  all data of mens spa and hair treatment
menBeardrouter.get("/",get_breadData)



// data for paticular category
menBeardrouter.get("/search/:ID",get_beardData_byID)




//  route to create new mens spa and treatment data
menBeardrouter.post("/create",create_beardData )



// update any mens spa and tretment data
menBeardrouter.put("/update/:ID" , update_beardData)


// delete
menBeardrouter.delete("/delete/:ID" ,delete_beardData)

module.exports = { menBeardrouter }