const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var cookieParser = require("cookie-parser");

const app = express();

    // Successful authentication, redirect home.
    const token = jwt.sign(
      { userid: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.password,
      { expiresIn: "5 days" }
    );
    console.log(user);
    res.status(201).send({ msg: "Login succesfull", token: token });
    // res.redirect('/');
  }
);


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
