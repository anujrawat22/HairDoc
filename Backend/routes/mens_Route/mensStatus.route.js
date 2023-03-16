const express = require('express')
const { get_status, create_status, update_status, delete_status } = require('../../controller/mens_status')

const StatusRouter = express.Router()

StatusRouter.get("/",get_status)

StatusRouter.post("/create",create_status)


StatusRouter.put("/update/:ID",update_status)

StatusRouter.delete("/delete/:ID",delete_status)
module.exports = { StatusRouter}