import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Profile = ({ user, setUser }) => {
  const [profile, setProfile] = useState(
    user || { name: "", phone: "", email: "", address: "", profilePic: "" }
  );
  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (profile.name) {
      setUser(profile); 
      setIsEditing(false);
      navigate("/Home page"); 
    } else {
      alert("Please enter a name.");
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">{isEditing ? "Edit Profile" : "Your Profile"}</h2>

      <div className="profile-pic-container">
        <img
          src={profile.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-pic"
        />
        {isEditing && <input type="file" className="file-input" onChange={handleImageUpload} />}
      </div>

      <div>
        <label className="profile-label">Name</label>
        {isEditing ? (
          <input type="text" name="name" value={profile.name} onChange={handleChange} className="profile-input" />
        ) : (
          <p>{profile.name}</p>
        )}
      </div>

      <div>
        <label className="profile-label">Phone</label>
        {isEditing ? (
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} className="profile-input" />
        ) : null}
      </div>

      <div>
        <label className="profile-label">Email</label>
        {isEditing ? (
          <input type="email" name="email" value={profile.email} onChange={handleChange} className="profile-input" />
        ) : null}
      </div>

      <div>
        <label className="profile-label">Address</label>
        {isEditing ? (
          <input type="text" name="address" value={profile.address} onChange={handleChange} className="profile-input" />
        ) : null}
      </div>

      {isEditing ? (
        <button onClick={handleSave} className="profile-btn">Save Profile</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="profile-btn profile-edit-btn">Edit Profile</button>
      )}
    <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
  </div>
  );
};

export default Profile;
