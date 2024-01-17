import "../styles/PrincipleCard.css";
import React, { useState } from 'react';

function PrincipleCard({ imageUrl, text, subText }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`principleCard-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt="Card Poster" className="principleCard-image" />
      {/* <div className="overlay-text">{text}</div>
      <div className="sub-text">{subText}</div> */}
      <div className="overlay-text">
        <div className="main-text">{text}</div>
        {subText && <div className="sub-text">{subText}</div>}
      </div>
    </div>
  
  );
}

export default PrincipleCard;
