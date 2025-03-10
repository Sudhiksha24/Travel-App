import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const vendors = [
  {
    id: 1,
    name: "Wanderlust Escapes",
    image: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Explore the world with Wanderlust Escapes, where every journey is tailored to satisfy your travel cravings. Experience unique adventures and create unforgettable memories.",
  },
  {
    id: 2,
    name: "Getaway Guru",
    image: "https://images.pexels.com/photos/545521/pexels-photo-545521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Expertly curated getaways to exotic and hidden gems. Getaway Guru specializes in personalized travel experiences that cater to your every need and preference.",
  },
  {
    id: 3,
    name: "Horizon Holidays",
    image: "https://images.pexels.com/photos/258149/pexels-photo-258149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Your trusted companion for seamless holiday planning. Horizon Holidays offers diverse travel packages that cater to all your vacation desires and preferences.",
  },
  {
    id: 4,
    name: "Alpine Adventures",
    image: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Thrilling escapades in mountainous terrains. Alpine Adventures specializes in trekking, skiing, and nature excursions for those seeking an adrenaline rush.",
  },
  {
    id: 5,
    name: "Serene Sojourns",
    image: "https://images.pexels.com/photos/86703/horseshoe-bend-page-arizona-colorado-river-86703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Discover tranquility in the most beautiful locations. Serene Sojourns provides luxurious stays and calming excursions that promise to soothe and relax.",
  },
  {
    id: 6,
    name: "Tranquil Travels",
    image: "https://images.pexels.com/photos/18888394/pexels-photo-18888394/free-photo-of-sandy-hill-with-the-sea-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Your gateway to serene destinations. Tranquil Travels offers peaceful retreats and relaxation packages designed to rejuvenate your mind, body, and soul.",
  },
  {
    id: 7,
    name: "Paradise Pathways",
    image: "https://images.pexels.com/photos/1182971/pexels-photo-1182971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Your journey to paradise starts here. Paradise Pathways offers tropical vacations and island retreats that transport you to an idyllic world of relaxation and beauty.",
  },
];

const HolidayVendors = () => {
  const navigate = useNavigate();

  const handleClick = (vendor) => {
    navigate(`/vendor page/${vendor.id}`, { state: { vendor } });
  };

  return (
    <div className="vendors-container">
      <div className="vendors-list">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="flip-card" onClick={() => handleClick(vendor)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={vendor.image} alt={vendor.name} />
              </div>
              <div className="flip-card-back">
                <h2>{vendor.name}</h2>
                <p>{vendor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
};

export default HolidayVendors;
