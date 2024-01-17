import "../styles/PositionRight.css";
import {  Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
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
function PositionRight({ positionText, image1, image2, name, position }) {
  return (
    <div className="right-position-container">
      <div className="right-position-topic">
        <h3>{positionText}</h3>
      </div>
      <div className="right-position-content">
        <div className="right-position-photo-container">
          <Reveal keyframes={fadeInLeft} delay={300} duration={600} triggerOnce > 
          <img src={image1} alt="" />
              <img src={image2} alt="" />

          </Reveal>
        

            
        </div>
        <div className="right-position-text-container">
          <div className="right-position-text">
            <Reveal keyframes={fadeInRight} delay={300} duration={600} triggerOnce>
            <p>{name}</p>
                <p>{position}</p>

            </Reveal>
          

              
          </div>
        </div>
      </div>
    </div>
  );
}

export default PositionRight;
