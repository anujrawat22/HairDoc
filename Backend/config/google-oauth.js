require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const { v4: uuidv4 } = require('uuid');

const { UserModel } = require('../models/user_signup.model')

passport.use(new GoogleStrategy({
    clientID: process.env.client_id,
    clientSecret: process.env.client_secret,
    callbackURL: "http://localhost:8080/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        const email = profile._json.email
        const isAlreadyExist = await UserModel.findOne({ email })

        if (isAlreadyExist) {
            return cb(null, isAlreadyExist)
        }

        const name = profile._json.name
        const avatar = profile._json.picture
        const password = uuidv4()
        const mobile = Math.ceil(Math.random() * 10000000000)

        const user = new UserModel({ name, avatar, email, password, mobile })
        await user.save()
        return cb(null, user);

    }
));

module.exports = { passport }