import '../styles/StrengthCertified.css'
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
function StrengthCertified({ text1, text2, image1,image2 }) {
  return (
    <div className="strength-certified-container">
      {/* <div className="strength-certified-title">
        <h2>CERTIFIED</h2>
      </div> */}
      <div className="strength-certified-wrapper">
        <div className="strength-certified-content1">
          <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce >
          <div className="strength-certified-image">
            <img src={image1} alt="" />
          </div>
          <div className="strength-certified-text-container">
            <div className="strength-certified-text">
              <p>{text1}</p>
            </div>
          </div>

          </Reveal>

          
           

           
          

        </div>

        <div className="strength-certified-content2">
          <Reveal keyframes={fadeInUp} delay={250} duration={600} triggerOnce>
          <div className="strength-certified-image">
            <img src={image2} alt="" />
          </div>
          <div className="strength-certified-text-container">
            <div className="strength-certified-text">
              <p>{text2}</p>
            </div>
          </div>

          </Reveal>
          


            
          
        </div>
      </div>
    </div>
  );
}

export default StrengthCertified;
