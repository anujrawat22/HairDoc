const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config()
var cookieParser = require('cookie-parser')
const fs = require("fs")

const {authenticate} = require('../middlewares/authentication')


const Redis = require('ioredis');
const redis = new Redis({
    port: 14860,
    host: process.env.redish_host,
    password: process.env.redish_password
})

const UserRouter = express.Router()
const {UserModel}=require('../models/user_signup.model');
const { json } = require('express');
UserRouter.use(cookieParser())

//signup
UserRouter.post('/signup', async (req, res) => {
    const { email, password, mobile, name ,avatar,gender,isAdmin,isActive
    } = req.body;
    bcrypt.hash(password, 6, async function (err, hash) {
        if (err) {
            res.status(500).send({ 'msg': "Something went wrong" })
        }
        else {
            try {
                // let user = new UserModel();
                const user={ email, password: hash, name, mobile,avatar,gender,isActive,isAdmin }
                let data = JSON.stringify(user)
                redis.set('user',data)
                let otp = Math.ceil(Math.random() * 10000);
                console.log(otp)
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: process.env.email,
                        pass: process.env.password,
                        clientId: process.env.client_id,
                        clientSecret: process.env.client_secret,
                        refreshToken: process.env.refreshtoken
                    }
                });

                const mailConfigurations = {
                    from: process.env.email,
                    to: email,
                    subject:'Sending Email For verification' ,
                    text: `Your verification code is ${otp}`
                };

                transporter.sendMail(mailConfigurations, async function (error, info) {
                    if (error) {
                        console.log('ERR: Error from nodemailer')
                        console.log(error)
                        res.status(500).send({ "msg": "Something went wrong" })
                    } else {
                        console.log('Email Sent Successfully');
                        redis.set('otp', otp)
                        res.status(201).send({ "msg": `Otp Sent Successfully`, "email": email ,"user":user})

                    }
                })
            }
            catch (err) {
                console.log(err);
                res.status(401).send({ "msg": "Something went wrong" })
            }
        }
    })
})

//verify
UserRouter.post('/verify', async (req, res) => {
    let { otp } = req.body;
    if (!otp) return res.status(401).send({ 'msg': "Please enter otp" })
    try {
        redis.get('otp', async (err, success) => {
            if (err) {
                return res.status(500).send({ "msg": 'Something went wrong' })
            }
            else if(otp==success) {
                const datas=await redis.get('user')
                const result = JSON.parse(datas)
                const user = new UserModel(result)
                await user.save()
                let email =  result.email
                console.log(email)
                let data = await UserModel.findOne({ email });
                console.log(data, req.body);
                const token = jwt.sign({ userid: data._id, email:data.email,isAdmin:data.isAdmin }, process.env.password, { expiresIn: '5 days' })
                redis.set('token', token)
               await redis.getdel('user')
               await redis.getdel('otp')
                res.status(201).send({ "msg": "Account Created Successfully", "token": token, "name": data.name })
            }else{
             res.status(401).send({ "msg": 'Wrong opt please try again' })
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ "msg": 'Something went wrong' })

    }
})


//login
UserRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user)
    if (user) {
        try {
            bcrypt.compare(password, user.password, async function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send({ 'msg': "Something went wrong" })
                }
                else if (result) {
                    const token = jwt.sign({ userid: user._id,  email:user.email,isAdmin:user.isAdmin }, process.env.password, { expiresIn: '5d' })

                    res.cookie("token",token,{httpOnly:true})
                    res.setHeader("token",token)

                    res.status(201).send({"msg":"Login successfull","token":token,"name":user.name})
                }
                else {
                    res.send({ 'msg': "incorrect password" })
                }
            })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ "msg": "Somethng went wrong" })
        }
    }
    else {
        res.status(401).send({ "msg": "Invailid credentials" })
    }
})

//logout
// UserRouter.get("/logout",(req,res)=>{
//     const token =  req.headers.authorization?.split(' ')[1] || req.cookies?.token
//     const blacklistData = JSON.parse(fs.readFileSync("./blacklist.json","utf-8"))
//     blacklistData.push(token)
//     fs.writeFileSync('./blacklist.json',JSON.stringify(blacklistData))
//     return res.send("user logged out successfully")
// })



module.exports = { UserRouter, redis }