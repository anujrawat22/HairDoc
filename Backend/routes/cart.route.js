const express  = require('express')
const { getCartItems, createCart, deleteItem, updateItem } = require('../controller/cart')

const CartRouter = express.Router()

CartRouter.get("/:id",getCartItems)

CartRouter.post("/:id",createCart)

CartRouter.put("/:id",updateItem)

CartRouter.delete("/deleteitem/:itemId",deleteItem)




module.exports = {CartRouter}