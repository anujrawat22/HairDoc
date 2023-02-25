import React from 'react'
import {Route, Routes} from "react-router-dom"
import SignUp from "../pages/Signup"
import Home from "../pages/Home"
import Login from "../pages/Login"
import WomenShow from "../pages/women/women_show"

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup"   element={<SignUp/>}/>
    <Route path="/login"   element={<Login/>}/>
    <Route path="/women"   element={<WomenShow/>}/>
    </Routes>
  )
}

export default AllRoutes