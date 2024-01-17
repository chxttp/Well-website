import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PerformanceComponent.css";
const PerformanceComponent = ({ imageSrc, title, text,path }) => {
    const navigate = useNavigate();
    const handleContinueReading = () => {
        navigate(path)
      };
    
  return (
    <div className="performance-component-container">
      <div className="performance-component-title">
        <h2>{title}</h2>
      </div>
      <img src={imageSrc} alt="" />
      <div className="performance-component-text">
        <p>{text}</p>
      </div>
      <div className="performance-component-button">
      <button onClick={handleContinueReading}>Continue Reading →</button>
      </div>
    </div>
  );
};

export default PerformanceComponent;
