const express  = require('express')
const { getCartItems, createCart, deleteItem, updateItem } = require('../controller/cart')

const CartRouter = express.Router()

CartRouter.get("/",getCartItems)

CartRouter.post("/",createCart)

CartRouter.put("/:id",updateItem)

CartRouter.delete("/:id",deleteItem)




module.exports = {CartRouter}