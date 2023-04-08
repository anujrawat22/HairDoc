const { CartModel } = require("../models/cart.model/cart.model")

exports.getCartItems = async(req,res)=>{
    try{
        const {id} = req.params
     const CartData = CartModel.find({customerId : id})
     if(CartData.length === 0){
        return res.status(404).send({message : `Cart Empty for user with id - ${id}`})
     }
      res.status(201).send({message : `Cart Data of user with id - ${id}`, CartData})
    }catch(err){
        console.log(err)
        res.status(500).send({Error : "Server Error"})
    }
}


exports.createCart = async(req,res)=>{
    try{
     const {name , price  , poster , serviceType , UserId} = req.body;
     const Cart  = await new CartModel({name , price , poster ,serviceType ,customerId : UserId })
     Cart.save()
     res.status(201).send({message : `Item Added to Cart for user with id - ${UserId}`})
    }catch(err){
        console.log(err)
        res.status(500).send({Error : "Server Error"})
    }
}

exports.updateItem = async(req,res)=>{
    try{
        const  {name , price , poster , serviceType , UserId} = req.body;
        const {id} = req.params
        const Item = await CartModel.findById(id)
        if(!Item){
            return res.status(404).send({message : `Item with id - ${id} not found`})
        }

        if(Item.customerId !== UserId.toHexString()){
            return res.status(401).send({message : "Unauthorized"})
        }else{
            await CartModel.updateOne({_id : id},{$set : {name,price,poster,serviceType , customerId : UserId}})
            res.status(201).send({message : `Cart Item with id - ${id} updated sucessfully`})
        }

    }catch(err){
        console.log(err)
        res.status(500).send({Error : "Server Error"})
    }
}

exports.deleteItem = async(req,res)=>{
    try{
      const {itemId} = req.params;
      const {UserId} = req.body
      const Item = await CartModel.findById(itemId)
      if(Item.customerId !==UserId.toHexString()){
        return res.status(401).send({message : "Unauthorized"})
      }else{
        await CartModel.findByIdAndDelete(itemId)
        res.status(201).send({message : `Cart item with id - ${itemId} deleted sucessfully`})
      }
    }catch(err){
        console.log(err)
        res.status(500).send({Error : "Server Error"})
    }
}