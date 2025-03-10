import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const rooms = [
  { id: 1, src: "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Luxury Suite", description: "A spacious suite with premium amenities." },
  { id: 2, src: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Deluxe Room", description: "A comfortable room with modern furnishings." },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1664392049725-af72dc87def5?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Standard Room", description: "A cozy space with essential facilities." },
  { id: 4, src: "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcmdlJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D", title: "Family Room", description: "A large room perfect for family stays." },
  { id: 5, src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Executive Room", description: "An elegant room for business travelers." },
  { id: 6, src: "https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=612x612&w=0&k=20&c=K6Q7dRNYeke6xtoR__5uP4rXGJeUNoBK6l-u7El-BTY=", title: "Penthouse Suite", description: "A luxurious suite with a stunning city view." },
];

const Room = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="room-gallery">
        {rooms.map(({ id, src, title, description }) => (
          <div key={id} className="room-item">
            <img src={src} alt={title} className="room-image" loading="lazy" />
            <h3 className="room-title">{title}</h3>
            <p className="room-description">{description}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
};

export default Room;
