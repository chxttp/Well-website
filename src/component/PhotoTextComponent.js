import React from "react";

import {  Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import "../styles/PhotoTextComponent.css";
const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(-40px);
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;
const fadeInRight = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(40px);
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

function PhotoTextComponent({ image1, text, image2 }) {
  return (
    <div className="photo-text-container">
      <div className="photo-container">
        <Reveal keyframes={fadeInLeft} delay={300} duration={600} triggerOnce>
        <img src={image1} alt="Description" />
        </Reveal>
        
        <Reveal keyframes={fadeInLeft} delay={300} duration={600} triggerOnce >
        <img src={image2} alt="Description" />

        </Reveal>
          

         
        

         
       
      </div>

      <div className="text-container">
        <div className="aboutus-text">
          <Reveal keyframes={fadeInRight} delay={300} duration={600} triggerOnce >
          <p>{text}</p>

          </Reveal>
         


           

        </div>
      </div>
    </div>
  );
}

export default PhotoTextComponent;
