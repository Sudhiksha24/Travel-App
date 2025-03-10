 import Authpage from './Authpage';
 import Homelogin from './Homelogin';
 import Profile from './Profile';
 import Home from './Home';
 import About from './About';
 import Touristspot from './Touristspot';
 import Room from './Room';
 import Food from './Food';
 import Ratings from './Ratings';
 import HolidayVendors from './HolidayVendors';
import Vendordetails from './Vendordetails';
import ForgotPassword from './ForgotPassword';
 import './App.css';

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import React, { useState } from "react";

 const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [user, setUser] = useState({
    name: "user2402",
    profilePic: "https://via.placeholder.com/100",
  });
  
  return (
    <>
      <Router>
        <Routes>
        <Route path ="/" element = {<Homelogin/>} />
        <Route path ="/Home page" element={<Home user={user} />} />
        <Route path ="/Login page" element={<Authpage setIsSignedIn={setIsSignedIn} />} />
        <Route path ="/Profile page" element={<Profile user={user} setUser={setUser} />} />
        <Route path ='/About page' element = {<About/>} />
        <Route path ='/Tourist page' element = {<Touristspot/>} />
        <Route path ='/Room page' element = {<Room/>} />
        <Route path ='/Food page' element = {<Food/>} />
        <Route path = '/Rating page' element = {<Ratings/>} />
        <Route path ="/Holiday page" element={<HolidayVendors />} />
        <Route path ="/vendor page/:id" element={<Vendordetails />} />
        <Route path = "/password page" element = {<ForgotPassword/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
