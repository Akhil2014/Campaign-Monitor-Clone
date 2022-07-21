import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Components/Homepage/HomePage';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/agencies' element={<HomePage />}/>
            <Route path='/customer' element={<HomePage />}/>
            <Route path='/resource' element={<HomePage />}/>
            <Route path='/gallery' element={<h1>akhil</h1>}/>
        </Routes>
    </>
  )
}

export default AllRoutes