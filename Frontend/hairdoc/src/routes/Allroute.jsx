import React from 'react'
import {Route, Routes} from "react-router-dom"
import SignUp from "../pages/Signup_login"
import Home from "../pages/Home"

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup"   element={<SignUp/>}/>
    </Routes>
  )
}

export default AllRoutes