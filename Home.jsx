import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaMapMarkerAlt, FaBed, FaUtensils, FaInfoCircle, FaStar, FaSignInAlt, FaSignOutAlt, FaCloud, FaSearch } from "react-icons/fa";
import "./App.css";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const profilePic = user?.profilePic || "https://via.placeholder.com/100";
  const name = user?.name || "Guest User";

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className={`menu-icon ${menuOpen ? "change" : ""}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="profile">
          <img src={profilePic} alt="Profile" className="profile-img" />
          <h3>{name}</h3>
          <button className="edit-btn" onClick={() => navigate("/Profile page")}>
            <FaUserEdit /> Edit
          </button>
        </div>
        <nav className="side-nav">
          <ul>
            <li onClick={() => navigate("/Login page")}><FaSignInAlt /> Login/Signup</li>
            <li onClick={() => navigate("/About page")}><FaInfoCircle /> About</li>
            <li onClick={() => navigate("/Rating page")}><FaStar /> Ratings</li>
            <li onClick={() => navigate("/Rating page")}><FaSignOutAlt /> Logout</li>
          </ul>
        </nav>
      </aside>
      <main className={`main-content ${menuOpen ? "shifted" : ""}`}>
        <div className="top-bar">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
        </div>
        <nav className="horizontal-nav">
          <ul>
            <li onClick={() => navigate("/Tourist page")}><FaMapMarkerAlt /> Tourist Spots</li>
            <li onClick={() => navigate("/Room page")}><FaBed /> Room Stay</li>
            <li onClick={() => navigate("/Food page")}><FaUtensils /> Food</li>
            <li onClick={() => navigate("/Holiday page")}><FaCloud /> HolidayVendor</li>
          </ul>
        </nav>
        <section className="content">
          <h2>Welcome to the perfect spot—relax and unwind!</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
