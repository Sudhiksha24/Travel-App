import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function About() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Discover Your Dream Journey</h1>

      {/* Wrap the text content in a flex container */}
      <div className="text-container">
        <div className="text">
          <p>
            Embark on your dream journey with our exceptional travel app, your
            ultimate travel companion! This intuitive app ensures you get the most
            out of your travel experience by helping you discover the top-rated
            tourist spots in any destination. From iconic landmarks to hidden gems,
            you'll have all the information you need to explore with confidence.
          </p>

          <p>
            But that's not all—the app also assists you in finding the highest-rated
            hotels for a comfortable stay and the best-rated restaurants for a
            delightful dining experience. Whether you're looking for luxury
            accommodations or budget-friendly options, and craving local delicacies
            or international cuisine, our app has you covered.
          </p>

          <p>
            Traveling on a budget? No worries! Our app connects you with experienced
            budget planners who can take care of your trip expenses, ensuring a
            hassle-free travel experience. They can assist with everything from
            daily budgeting to unexpected expenses, so you can focus on enjoying
            your adventure.
          </p>

          <p>
            Additionally, the app provides a range of other essential services, like
            booking local guides, transportation options, and fulfilling any
            specific needs you might have during your trip. With our app, every
            aspect of your travel is taken care of, making your journey seamless and
            enjoyable.
          </p>

          <p>
            So, why wait? Download our travel app today and embark on the perfect
            adventure, with all the tools and support you need right at your
            fingertips! 🌍✈️
          </p>

          <p>
            <h1> Contact Us</h1>
            If you have any questions, concerns, or inquiries, feel free to reach out to us. We’re here to help!<br></br>
            📩 Email: <a href="geonomad@gmail.com">Send email</a>– Drop us an email, and we’ll get back to you as soon as possible.<br></br>
            📞 Phone: [+(058) 234 567 891] – Call or text us for immediate assistance.
          </p>
        </div>

        <div className="images">
          <img src="https://images.pexels.com/photos/912897/pexels-photo-912897.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tourist Spot" />
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Hotel"
          />
          <img
            src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo="
            alt="Restaurant"
          />
          <img 
            src = "https://images.pexels.com/photos/2445545/pexels-photo-2445545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt = "place"
          />
          <img
             src = "https://images.pexels.com/photos/3049806/pexels-photo-3049806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             alt = "temple"
          />
          <img 
             src = "https://images.pexels.com/photos/2409361/pexels-photo-2409361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             alt = "place"
          />
        </div>
      </div>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
}

export default About;
