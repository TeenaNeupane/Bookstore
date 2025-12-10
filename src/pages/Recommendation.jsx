// pages/Recommendation.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recommendation.css";

const Recommendation = () => {
  const navigate = useNavigate();

  const goToRecommendations = () => {
    navigate("/recommendations");
  };

  return (
    <div className="recommendation-page">
      <h1>Recommendations from us to you</h1>
      <h2>Let's play a game</h2>
      <button className="recommend-btn" onClick={goToRecommendations}>
        Show Me My Recommended Books
      </button>
    </div>
  );
};

export default Recommendation;
