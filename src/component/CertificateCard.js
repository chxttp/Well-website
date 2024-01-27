import React from "react";
import "../styles/CertificateCard.css";

function CertificateCard({ imageUrl, cardName }) {
  

  
  return (
    <div className={`certificate-container`}>
      <div className="card-content">
        <div className="card-image-wrapper">
          <div className="card-image">
            <img src={imageUrl} alt="Card Poster" />
          </div>
        </div>

        <div className="card-details">
         
          <p className="card-description">
           {cardName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
