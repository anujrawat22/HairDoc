
const express = require('express');
require('dotenv').config()
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const { connection } = require('./config/db.js')

const {UserRouter}=require('./routes/user_signup.router')
const {validate}=require('./middlewares/validate')

app.post('/signup',validate,UserRouter)
app.post('/login',UserRouter)
app.post('/verify',UserRouter)

app.listen(8080, async () => {
    try {
        await connection
        console.log('connected to db')
        console.log('listening in port 8080')
    }
    catch (err) {
        console.log(err)
        console.log('error in connecting')
    }
})