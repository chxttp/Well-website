import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Fade } from 'react-awesome-reveal';
import "../styles/PhotoTextComponent.css";

function PhotoTextComponent({ image1, text, image2 }) {
  return (
    <div className="photo-text-container">
      <div className="photo-container">
        <Parallax y={[-40, 40]} >
          <Fade left  duration={2000}>
            <img src={image1} alt="Description" />
          </Fade>
          <Fade right  duration={2000}>
          <img src={image2} alt="Description" />
          </Fade>
        </Parallax>
      </div>

      <div className="text-container">
        <div className="aboutus-text">
          <Parallax  y={[-40, 40]}>
            <Fade right  duration={2000}>
            <p>{text}</p>

            </Fade>
          </Parallax>

        </div>
      </div>
    </div>
  );
}

export default PhotoTextComponent;
