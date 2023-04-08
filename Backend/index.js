const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var cookieParser = require("cookie-parser");

const app = express();

//googleauth
const {passport}=require('./config/google-oauth')

app.use(express.json())
app.use(cors({
    origin: '*'
}))

//middleware
const {authenticate} = require("./middlewares/authentication")
const {validate}=require('./middlewares/validate');
const {validate_google_oauth}=require('./middlewares/validate-google-auth')

app.use(cookieParser())

const { connection } = require('./config/db.js')

const {UserRouter}=require('./routes/user_signup.router')
const { menHairColorrouter } = require('./routes/mens_Route/men_haircolor.model.js');
const { menHairCutrouter } = require('./routes/mens_Route/men_haircut.model.js');
const { menBeardrouter } = require('./routes/mens_Route/menbeard.route.js');
const { mensparouter } = require('./routes/mens_Route/menspatreatment.route.js');
const { checkRouter } = require("./routes/checkAuth.route");
const {womenRouter} =require('./routes/hair_product.route');
const { StatusRouter } = require("./routes/mens_Route/mensStatus.route");
const { CartRouter } = require("./routes/cart.route");


//routes
app.post('/signup',validate,UserRouter)
app.post('/login',UserRouter)
app.use('/logout',UserRouter)
app.post('/verify',UserRouter)
app.use("/check", authenticate, checkRouter); 
app.use("/men/haircolor",menHairColorrouter)
app.use("/men/haircut",menHairCutrouter )
app.use("/men/beard", menBeardrouter)
app.use("/men/spa",mensparouter)
app.use("/men/status",StatusRouter)
app.use("/women",womenRouter)
app.use("/cart",authenticate,CartRouter)


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
    await connection;
    console.log("connected to db");
    console.log("listening in port 8080");
  } catch (err) {
    console.log(err);
    console.log("error in connecting");
  }
});
