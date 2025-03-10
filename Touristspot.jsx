import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const images = [
  { id: 1, src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Taj Mahal, Agra, India", description: "A stunning white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal." },
  { id: 2, src: "https://images.pexels.com/photos/3169012/pexels-photo-3169012.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Adalaj Stepwell, Gujarat, India", description: "A beautifully carved 15th-century stepwell blending Indo-Islamic architecture, serving as a water reservoir." },
  { id: 3, src: "https://images.pexels.com/photos/7263942/pexels-photo-7263942.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Qutub Minar, Delhi, India", description: "A 73-meter-high minaret built in the 12th century, symbolizing victory and Indo-Islamic craftsmanship." },
  { id: 4, src: "https://images.pexels.com/photos/2272067/pexels-photo-2272067.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Humayun's Tomb, Delhi, India", description: "A 16th-century Mughal garden-tomb and UNESCO World Heritage Site, inspiring the Taj Mahal." },
  { id: 5, src: "https://images.pexels.com/photos/2814639/pexels-photo-2814639.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Al-Sadiq Mosque, Bahawalpur, Pakistan", description: "A grand white mosque known for its intricate calligraphy and historical significance." },
  { id: 6, src: "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Dakshineswar Kali Temple, Kolkata, India", description: "A famous 19th-century temple dedicated to Goddess Kali, linked to saint Ramakrishna." },
];

const Touristspot = () => {
  const navigate = useNavigate();

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map(({ id, src, title, description }) => (
          <div key={id} className="gallery-item">
            <img src={src} alt={title} className="gallery-image" loading="lazy" />
            <h3 className="image-title">{title}</h3>
            <p className="image-description">{description}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
};

export default Touristspot;
