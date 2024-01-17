import React from "react";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "../styles/ServiceContent.css";
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
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <div className="service-images-wrapper">
            <img src={imageLeft} alt="" className="service-image-left" />
          </div>
        </Reveal>

        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <div className="service-images-wrapper">
            <img src={imageRight} alt="" className="service-image-right" />
          </div>
        </Reveal>
      </div>
      <div className="service-images">
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image3} alt="" className="service-image-left" />
            </div>

        </Reveal>
       
         
            
          
       
       
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image4} alt="" className="service-image-right" />
            </div>

        </Reveal>

          
    
      </div>
      <div className="service-text-container">
        <h2 className="service-text-topic">{topic2}</h2>
        <p className="service-text">{text}</p>
      </div>
    </div>
  );
};

export default ServiceContent;
