import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-reveal";
import "../styles/ServiceContent.css";

const ServiceContent = ({
  topic,
  imageLeft,
  imageRight,
  text,
  topic2,
  image3,
  image4,
}) => {
  return (
    <div className="ServiceContent-container">
      <h2 className="service-topic">{topic}</h2>
      <div className="service-images">
        <Parallax y={[-20, 20]} className="parallax">
          <Fade left duration={2000}>
            <img src={imageLeft} alt="" className="service-image-left" />
          </Fade>
        </Parallax>
        
        <Parallax y={[-20, 20]} className="parallax">
          <Fade right duration={2000}>
            <img src={imageRight} alt="" className="service-image-right" />
          </Fade>
        </Parallax>
      </div>
      <div className="service-images">
        <Parallax y={[-20, 20]} className="parallax">
          <Fade left duration={2000}>
            <img src={image3} alt="" className="service-image-left" />
          </Fade>
        </Parallax>
        <Parallax y={[-20, 20]} className="parallax">
          <Fade right duration={2000}>
            <img src={image4} alt="" className="service-image-right" />
          </Fade>
        </Parallax>
      </div>
      <div className="service-text-container">
        <h2 className="service-text-topic">{topic2}</h2>
        <p className="service-text">{text}</p>
      </div>
    </div>
  );
};

export default ServiceContent;
