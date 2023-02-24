
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
const {validate}=require('./middlewares/validate');
const { menHairColorrouter } = require('./routes/mens_Route/men_haircolor.model.js');
const { menHairCutrouter } = require('./routes/mens_Route/men_haircut.model.js');
const { menBeardrouter } = require('./routes/mens_Route/menbeard.route.js');
const { mensparouter } = require('./routes/mens_Route/menspatreatment.route.js');


app.post('/signup',validate,UserRouter)
app.post('/login',UserRouter)
app.post('/verify',UserRouter)
app.use("men/haircolor",menHairColorrouter)

app.use("/men/haircut",menHairCutrouter)

app.use("/men/beard",menBeardrouter)

app.use("/men/spaandtreatment",mensparouter)

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