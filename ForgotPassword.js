import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css'; 

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Here you would typically send the data to the server
    // e.g., via an API call
    setSuccess('Password successfully reset!');
    setError('');
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-header">Forgot Password</h2>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div>
          <label className="forgot-password-label">
            Email or Phone Number:
            <input
              type="text"
              className="forgot-password-input"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="forgot-password-label">
            New Password:
            <input
              type="password"
              className="forgot-password-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="forgot-password-label">
            Confirm New Password:
            <input
              type="password"
              className="forgot-password-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <p className="forgot-password-error">{error}</p>}
        {success && <p className="forgot-password-success">{success}</p>}
        <button className="forgot-password-button" type="submit">Reset Password</button>
      </form>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
};

export default ForgotPassword;
