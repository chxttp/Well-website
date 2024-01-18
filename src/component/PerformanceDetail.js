// PerformanceDetail.js

import React from "react";
import "../styles/PerformanceDetail.css";


function PerformanceDetail({title, date, image1, image2, image3, image4, text}) {
  return (
    <div className="Performance-detail-container">
        <div className="Performamce-detail-title">
            <h3>{title}</h3>
        </div>
        <div className="Performance-detail-date">
        <h4>{date}</h4>
        </div>
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image1} alt="" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image3} alt="" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image4} alt="" />
        </div>
      </div>

      <div className="performance-detail-text">
        <p>{text}</p>
       
      </div>
    </div>
  );
}

export default PerformanceDetail;
