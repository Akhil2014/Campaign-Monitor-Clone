import React from 'react'
import { Routes, Route } from "react-router-dom";
import Agencies from '../Components/AgenciesPage/Agencies';
import Contact from '../Components/ContactUsPage/Contact';
import Customer from '../Components/CustomersPage/Customer';
import Gallery from '../Components/GalleryPage/Gallery';
import HomePage from '../Components/Homepage/HomePage';
import Login from '../Components/LoginPage/Login';
import Resource from '../Components/ResourcesPage/Resource';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/agencies' element={<Agencies />}/>
            <Route path='/customer' element={<Customer />}/>
            <Route path='/resource' element={<Resource />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </>
  )
}

export default AllRoutes