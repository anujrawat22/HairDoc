import React from 'react'
import {Route, Routes} from "react-router-dom"
import SignUp from "../pages/Signup"
import Home from "../pages/Home"
import Login from "../pages/Login"

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup"   element={<SignUp/>}/>
    <Route path="/login"   element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes