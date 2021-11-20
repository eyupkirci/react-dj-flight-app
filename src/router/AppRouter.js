import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import NavbarMenu from "../components/navbar/Navbar"

import Home from '../pages/home/Home'
import Flights from '../pages/flights/Flights'
import FlightDetail from '../pages/flightDetail/FlightDetail'
import Profile from '../pages/profile/Profile'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'


const AppRouter = () => {
    return (
        <Router>
        
            <NavbarMenu/>

            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/flights" element={<Flights/>} />
                <Route path="/flightDetail" element={<FlightDetail/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>

        </Router>
    )
}

export default AppRouter
