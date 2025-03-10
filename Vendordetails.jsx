import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './App.css';

const VendorDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vendor } = location.state;

  const vendorDetails = {
    "Wanderlust Escapes": {
      Overview: "Explore the world with Wanderlust Escapes, where every journey is tailored to satisfy your travel cravings. Experience unique adventures and create unforgettable memories.",
      MinimumBudget: "₹30,000",
      MaximumBudget: "₹3,00,000",
      HappyCustomersReview: "4.8/5",
      SuccessRate: "95%",
      YearsofExperience: "10 years",
      Phoneno : "+91 6392659288",
    },
    "Getaway Guru": {
      Overview: "Expertly curated getaways to exotic and hidden gems. Getaway Guru specializes in personalized travel experiences that cater to your every need and preference.",
      MinimumBudget: "₹25,000",
      MaximumBudget: "₹2,50,000",
      HappyCustomersReview: "4.7/5",
      SuccessRate: "93%",
      YearsofExperience: "8 years",
      Phoneno : "+91 7746538396"
    },
    "Horizon Holidays": {
      Overview: "Your trusted companion for seamless holiday planning. Horizon Holidays offers diverse travel packages that cater to all your vacation desires and preferences.",
      MinimumBudget: "₹20,000", 
      MaximumBudget: "₹2,00,000",
      HappyCustomersReview: "4.6/5", 
      SuccessRate: "92%", 
      YearsofExperience: "7 years",
      Phoneno : "+91 8634850310",
    },
    "Alpine Adventures": {
      Overview: "Thrilling escapades in mountainous terrains. Alpine Adventures specializes in trekking, skiing, and nature excursions for those seeking an adrenaline rush.", 
      MinimumBudget: "₹35,000", 
      MaximumBudget: "₹3,50,000", 
      HappyCustomersReview: "4.9/5",
      SuccessRate: "96%", 
      YearsofExperience: "12 years",
      Phoneno : "+91 9342755943",
    },
    "Serene Sojourns": {
      Overview: "Discover tranquility in the most beautiful locations. Serene Sojourns provides luxurious stays and calming excursions that promise to soothe and relax.", 
      MinimumBudget: "₹40,000", 
      MaximumBudget: "₹4,00,000",
      HappyCustomersReview: "4.8/5", 
      SuccessRate: "94%", 
      YearsofExperience: "11 years",
      Phoneno : "+91 8658635643",
    },
    "Tranquil Travels": {
      Overview: "Your gateway to serene destinations. Tranquil Travels offers peaceful retreats and relaxation packages designed to rejuvenate your mind, body, and soul.", 
      MinimumBudget: "₹30,000", 
      MaximumBudget: "₹2,50,000", 
      HappyCustomersReview: "4.7/5", 
      SuccessRate: "93%", 
      YearsofExperience: "9 years",
      Phoneno : "+91 7988965679"
    },
    "Paradise Pathways": {
      Overview: "Your journey to paradise starts here. Paradise Pathways offers tropical vacations and island retreats that transport you to an idyllic world of relaxation and beauty.", 
      MinimumBudget: "₹45,000", 
      MaximumBudget: "₹4,50,000",
      HappyCustomersReview: "4.9/5", 
      SuccessRate: "97%", 
      YearsofExperience: "15 years",
      Phoneno : "+91 7985947570",
    }
  };

  return (
    <div className="vendor-detail-container">
      <img src={vendor.image} alt={vendor.name} />
      <p>{vendor.description}</p>
      <div className="detailed-description">
        <p>Overview: {vendorDetails[vendor.name]?.Overview}</p>
        <p>Minimum Budget: {vendorDetails[vendor.name]?.MinimumBudget}</p>
        <p>Maximum Budget: {vendorDetails[vendor.name]?.MaximumBudget}</p>
        <p>Happy Customers Review: {vendorDetails[vendor.name]?.HappyCustomersReview}</p>
        <p>Success Rate: {vendorDetails[vendor.name]?.SuccessRate}</p>
        <p>Years of Experience: {vendorDetails[vendor.name]?.YearsofExperience}</p>
        <h3>Contact Us</h3>
        <p>Phone No : {vendorDetails[vendor.name]?.Phoneno}</p>
      </div>
      <button className="back-button" onClick={() => navigate("/Holiday page")}>Back</button>
    </div>
  );
};

export default VendorDetail;
