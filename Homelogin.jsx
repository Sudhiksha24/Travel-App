import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Homelogin() {
  const navigate = useNavigate();

  return (
    <div className="homelogin-container">
      <h1>GeoNomad App Welcomes You !!</h1>
      <p><i>Live with no excuses and travel with no regrets.</i></p>
      <button className="button homelogin" onClick={() => navigate("/Home page")}>
        Get Started
      </button>
    </div>
  );
}

export default Homelogin;

