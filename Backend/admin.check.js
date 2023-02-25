const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var cookieParser = require("cookie-parser");

const app = express();



app.use(express.json())
app.use(cors({
    origin: '*'
}))



const { connection } = require('./config/db.js')

const {UserRouter}=require('./routes/user_signup.router')
const { menHairColorrouter } = require('./routes/mens_Route/men_haircolor.model.js');
const { menHairCutrouter } = require('./routes/mens_Route/men_haircut.model.js');
const { menBeardrouter } = require('./routes/mens_Route/menbeard.route.js');
const { mensparouter } = require('./routes/mens_Route/menspatreatment.route.js');
const { checkRouter } = require("./routes/checkAuth.route");


//routes
app.post('/create',menBeardrouter)





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
