import React from "react";
import "../styles/PerformanceDetail.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
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

function PerformanceDetail({
  title,
  date,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  text,
}) {
  return (
    <div className="Performance-detail-container">
      <div className="Performamce-detail-title">
        <h3>{title}</h3>
      </div>
      <div className="Performance-detail-date">
        <h4>{date}</h4>
      </div>
      <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce className="Reveal">
        <div className="performance-detail-row">
          <div className="performance-detail-image-wrapper">
            <img src={image1} alt="" />
          </div>
          <div className="performance-detail-image-wrapper">
            <img src={image2} alt="" />
          </div>
        </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce className="Reveal">
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image3} alt="" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image4} alt="" />
        </div>
      </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce className="Reveal">
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image5} alt="" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image6} alt="" />
        </div>
      </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce className="Reveal">
      <div className="performance-detail-row">
        <div className="performance-detail-image-wrapper">
          <img src={image7} alt="" />
        </div>
        <div className="performance-detail-image-wrapper">
          <img src={image8} alt="" />
        </div>
      </div>
      </Reveal>

      <div className="performance-detail-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PerformanceDetail;
