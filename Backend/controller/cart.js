const { CartModel } = require("../models/cart.model/cart.model")

exports.getCartItems = async(req,res)=>{
    try{
        const { UserId } = req.body
        
     const CartData =await CartModel.find({customerId : UserId})
     if(CartData.length === 0){
        return res.status(404).send({message : `Cart Empty for user with id - ${UserId}`})
     }
      res.status(201).send({message : `Cart Data of user with id - ${UserId}`, CartData})
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

        if(Item.customerId.toHexString() !== UserId){
            return res.status(401).send({message : "Unauthorized"})
        }else{
            Item.name = name;
            Item.price = price;
            Item.poster = poster;
            Item.serviceType = serviceType
            await Item.save()
            res.status(201).send({message : `Cart Item with id - ${id} updated sucessfully`})
        }

    }catch(err){
        console.log(err)
        res.status(500).send({Error : "Server Error"})
    }
}

exports.deleteItem = async(req,res)=>{
    try{
      const {id} = req.params;
      const {UserId} = req.body
      const Item = await CartModel.findById(id)
      if(Item.customerId.toHexString() !==UserId){
        return res.status(401).send({message : "Unauthorized"})
      }else{
        await CartModel.findByIdAndDelete(id)
        res.status(201).send({message : `Cart item with id - ${id} deleted sucessfully`})
      }
    }catch(err){
        console.log(err)
        res.status(500).send({Error : "Server Error"})
    }
}