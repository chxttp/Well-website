import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "../styles/PerformanceComponent.css";
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
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
      <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce className="Reveal" >
      <img src={imageSrc} alt="" />

      </Reveal>

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
