
const express = require('express');
const cors = require('cors')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const app = express();
const {passport}=require('./config/google-oauth')

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const { connection } = require('./config/db.js')

const {UserRouter}=require('./routes/user_signup.router')
const {validate}=require('./middlewares/validate')
const {validate_google_oauth}=require('./middlewares/validate-google-auth')

app.post('/signup',validate,UserRouter)
app.post('/login',UserRouter)
app.post('/verify',UserRouter)
app.get('/',(req,res)=>{
    res.send("This is base router")
})


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false}),
  function({user}, res) {
    // Successful authentication, redirect home.
    const token = jwt.sign({ userid: user._id, email:user.email,isAdmin:user.isAdmin }, process.env.password, { expiresIn: '5 days' })
    console.log(user)
    res.status(201).send({'msg':'Login succesfull','token':token})
    // res.redirect('/');
  });



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