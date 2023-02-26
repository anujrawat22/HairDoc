import React from 'react'
import {Route, Routes} from "react-router-dom"
import Mens from '../Components/category'
import Home from "../pages/Home"
import MensBeardCut from '../Components/MensBeardCut';
import MensColor from '../Components/MensColoring';
import MensHairCut from '../Components/MensHairCut';
import MensSpa from '../Components/MenSpa';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/mens' element={<Mens/>} />
    <Route path='/mens/beard' element={<MensBeardCut/>} />
    <Route path='/mens/color' element={<MensColor/>} />
    <Route path='/mens/hair' element={<MensHairCut/>} />
    <Route path='/mens/spa' element={<MensSpa/>} />

    </Routes>
  )
}

export default AllRoutes