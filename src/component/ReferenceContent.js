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
const ReferenceContent = ({
  topic,
  image1,
  image2,
  text,
  topic2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
}) => {
  return (
    <div className="ServiceContent-container">
      <h2 className="service-topic">{topic}</h2>
      <div className="service-images">
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <div className="service-images-wrapper">
            <img src={image1} alt="" className="service-image-left" />
          </div>
        </Reveal>

        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <div className="service-images-wrapper">
            <img src={image2} alt="" className="service-image-right" />
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
      <div className="service-images">
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image5} alt="" className="service-image-left" />
            </div>

        </Reveal>
       
         
            
          
       
       
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image6} alt="" className="service-image-right" />
            </div>

        </Reveal>

          
    
      </div>
      <div className="service-images">
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image7} alt="" className="service-image-left" />
            </div>

        </Reveal>
       
         
            
          
       
       
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image8} alt="" className="service-image-right" />
            </div>

        </Reveal>

          
    
      </div>
      <div className="service-images">
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image9} alt="" className="service-image-left" />
            </div>

        </Reveal>
       
         
            
          
       
       
        <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <div className="service-images-wrapper">
              <img src={image10} alt="" className="service-image-right" />
            </div>

        </Reveal>

          
    
      </div>
      
    </div>
  );
};

export default ReferenceContent;
