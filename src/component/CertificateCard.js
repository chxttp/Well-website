import React from "react";
import "../styles/CertificateCard.css";

function CertificateCard({ imageUrl, cardName, isMiddleCard, cardTitle }) {
  // const cardClassName = isMiddleCard ? "middle-card" : "";

  
  return (
    <div className={`certificate-container`}>
      <div className="card-content">
        <div className="card-image-wrapper">
          <div className="card-image">
            <img src={imageUrl} alt="Card Poster" />
          </div>
        </div>

        <div className="card-details">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-description">
           {cardName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
