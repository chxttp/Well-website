// PerformanceList.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PerformanceList.css"; // Create a CSS file for styling
import maemoh1 from "../Images/maemoh3.jpg";
import prapa1 from '../Images/prapa1.jpg'
import hongsa1 from '../Images/hongsa1.jpg'
import locales from "../data/locales";

function PerformanceList() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
    const navigate = useNavigate();
    const handleElement1Click = () => {
        navigate(`/${currentLanguage}/เหมืองเเม่เมาะ`)
      };
      const handleElement2Click = () => {
        navigate(`/${currentLanguage}/การประปา`)
      };
      const handleElement3Click = () => {
        navigate(`/${currentLanguage}/โรงไฟฟ้าหงสา`)
      };
  return (
    <div className="performance-list-container">
      <div className="performance-list-header">
        <h2>{locales[currentLanguage].performanceList}</h2>
      </div>
      <div className="performance-list-items">
        <div className="performance-list-item" onClick={handleElement1Click}>
          <img src={maemoh1} alt="Performance 1" />
          <div className="performance-list-item-details">
            <h3>{locales[currentLanguage].performance1Title}</h3>
          </div>
        </div>
        <div className="performance-list-item" onClick={handleElement2Click}>
          <img src={prapa1} alt="Performance 2" />
          <div className="performance-list-item-details">
            <h3>{locales[currentLanguage].performance2Title}</h3>
          </div>
        </div>
        <div className="performance-list-item" onClick={handleElement3Click}>
          <img src={hongsa1} alt="Performance 3" />
          <div className="performance-list-item-details">
            <h3>{locales[currentLanguage].performance3Title}</h3>
          </div>
        </div>
        {/* <div className="performance-list-item">
          <img src={image4} alt="Performance 4" />
          <div className="performance-list-item-details">
            <h3>Performance 4</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PerformanceList;
