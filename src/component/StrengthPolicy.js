import strength2 from '../Images/strength2.jpeg'
import {  Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import '../styles/StrengthPolicy.css'
import locales from "../data/locales";
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

function StrengthPolicy() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
    return (
        <div className="key-strength-wrapper">
        <div className="key-strength-photo-container">
          <Reveal keyframes={fadeInLeft} delay={300} duration={600} triggerOnce className='strength-reveal'>
          <img src={strength2} alt=""  className='key-strength-image'/>

          </Reveal>
          
           

            

          
        </div>
        <div className="key-strength-text-container">
          <div className="text-box">
            <h2>{locales[currentLanguage].policyName}</h2>
            <p>
              {locales[currentLanguage].policyText}
            </p>
          </div>
          <div className="text-box">
            {/* <h2>Text Box 2</h2> */}
            <p>
            {locales[currentLanguage].policyText2}
              
            </p>
          </div>
        </div>
      </div>
      );
}

export default StrengthPolicy;
