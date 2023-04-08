const jwt = require('jsonwebtoken');
require('dotenv').config()

const fs = require("fs")



const authenticate = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1] || req.cookies?.token
    //console.log(req.cookies)
    if(token){
        // const blacklistData = fs.readFileSync("./blacklist.json","utf-8")
        // if(blacklistData.includes(token)){
        //     return res.send("please login again")
        // }

        jwt.verify(token, process.env.password,function(err,decoded){
            if(err){
                res.status(401).send({"msg":"please login","err":err.message})
            }
            else{
                req.body.UserId = decoded.userid
                next()
            }
        })
    }
    else{
        res.status(401).send({"msg":"please login"})
    }
}


module.exports = {authenticate}