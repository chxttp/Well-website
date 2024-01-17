import "../styles/PositionLeft.css";
import {Reveal} from 'react-awesome-reveal'
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
function PositionLeft({ positionText, image1, image2, name, position }) {
  return (
    <div className="left-position-container">
      <div className="left-position-topic">
        <h3>{positionText}</h3>
      </div>
      <div className="left-position-content">
        <div className="left-position-text-container">
          <div className="left-position-text">
            <Reveal keyframes={fadeInLeft}  delay={300} duration={600} triggerOnce >
                <p>{name}</p>
                <p>{position}</p>
            </Reveal>
            
               
            
          </div>
        </div>
        
        <div className="left-position-photo-container">
          <Reveal keyframes={fadeInRight}  delay={300} duration={600} triggerOnce >
          <img src={image1} alt="" />
          <img src={image2} alt="" />

          </Reveal>
          
            

            
          

        </div>
      </div>
    </div>
  );
}

export default PositionLeft;
