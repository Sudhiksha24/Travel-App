import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Ratings = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Rating:", selectedRating);
    console.log("Feedback:", feedback);
    alert(`Rating: ${selectedRating}\nFeedback: ${feedback}`);
  };

  return (
    <div className="ratings-container">
      <h2>Rate Us</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`star ${selectedRating >= rating ? "selected" : ""}`}
            onClick={() => handleRatingClick(rating)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit Rating
      </button>
      <h2>Feedback</h2>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Leave your feedback here..."
        className="feedback-textarea"
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit Feedback
      </button>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
};

export default Ratings;
