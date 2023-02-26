import React from 'react'
import {Route, Routes} from "react-router-dom"
import SignUp from "../pages/Signup"
import Home from "../pages/Home"
import Login from "../pages/Login"
import WomenShow from "../pages/women/women_show"
import Men from "../pages/Men"

const AllRoutes = () => {
  return (
    //all routes
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup"   element={<SignUp/>}/>
    <Route path="/login"   element={<Login/>}/>
    <Route path="/women"   element={<WomenShow/>}/>
    <Route path="/men"   element={<Men/>}/>
    </Routes>
  )
}

export default AllRoutes