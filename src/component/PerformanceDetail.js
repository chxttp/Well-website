// PerformanceDetail.js

import React from "react";
import "../styles/PerformanceDetail.css";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";

function PerformanceDetail(/*{image1,image2,image3,image4,text}*/) {
  return (
    <div className="Performance-detail-container">
        <div className="Performamce-detail-title">
            <h3>งานเหมืองเเม่เมาะ</h3>
        </div>
        <div className="Performance-detail-date">
        <h4>วันที่ 9 ธ.ค. 2566</h4>
        </div>
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image2} alt="Image 2" />
        </div>
      </div>
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image3} alt="Image 3" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image4} alt="Image 4" />
        </div>
      </div>

      <div className="performance-detail-text">
        {/* <p>{text}</p> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          commodo nulla facilisi nullam vehicula ipsum a arcu.
        </p>
      </div>
    </div>
  );
}

export default PerformanceDetail;
