// PerformanceList.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PerformanceList.css"; // Create a CSS file for styling
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import maemoh1 from "../Images/maemoh3.jpg";
import prapa1 from '../Images/prapa1.jpg'

function PerformanceList() {
    const navigate = useNavigate();
    const handleElement1Click = () => {
        navigate('/เหมืองเเม่เมาะ')
      };
      const handleElement2Click = () => {
        navigate('/การประปา')
      };
  return (
    <div className="performance-list-container">
      <div className="performance-list-header">
        <h2>ผลงานของเรา</h2>
      </div>
      <div className="performance-list-items">
        <div className="performance-list-item" onClick={handleElement1Click}>
          <img src={maemoh1} alt="Performance 1" />
          <div className="performance-list-item-details">
            <h3>งานเหมืองเเม่เมาะ</h3>
          </div>
        </div>
        <div className="performance-list-item" onClick={handleElement2Click}>
          <img src={prapa1} alt="Performance 2" />
          <div className="performance-list-item-details">
            <h3>การประปาส่วนภูมิภาค</h3>
          </div>
        </div>
        <div className="performance-list-item">
          <img src={image3} alt="Performance 3" />
          <div className="performance-list-item-details">
            <h3>Performance 3</h3>
          </div>
        </div>
        <div className="performance-list-item">
          <img src={image4} alt="Performance 4" />
          <div className="performance-list-item-details">
            <h3>Performance 4</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceList;
