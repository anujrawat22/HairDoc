const express = require("express")
const { get_haircut_data, get_haircutData_byId, create_haircut, update_haircut, delete_haricut } = require("../../controller/men_haircut")

const menHairCutrouter = express.Router()






//  all data of mens spa and hair treatment
menHairCutrouter.get("/",get_haircut_data)



// data for paticular category and name
menHairCutrouter.get("/search/:ID",get_haircutData_byId)




//  route to create new mens spa and treatment data
menHairCutrouter.post("/create",create_haircut )



// update any mens spa and tretment data
menHairCutrouter.put("/update/:ID" ,update_haircut)


// delete
menHairCutrouter.delete("/delete/:ID" ,delete_haricut)

module.exports = { menHairCutrouter }