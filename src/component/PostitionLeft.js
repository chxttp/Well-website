import "../styles/PositionLeft.css";
import { Parallax } from "react-scroll-parallax";
import { Fade } from 'react-awesome-reveal';
function PositionLeft({ positionText, image1, image2, name, position }) {
  return (
    <div className="left-position-container">
      <div className="left-position-topic">
        <h3>{positionText}</h3>
      </div>
      <div className="left-position-content">
        <div className="left-position-text-container">
          <div className="left-position-text">
            <Parallax>
              <Fade left  duration={2000}>
                <p>{name}</p>
                <p>{position}</p>
              </Fade>
            </Parallax>
          </div>
        </div>
        
        <div className="left-position-photo-container">
          <Parallax className="left-photo-parallax">
            <Fade right duration={2000}>
            <img src={image1} alt="" />
          <img src={image2} alt="" />

            </Fade>
          </Parallax>
          

        </div>
      </div>
    </div>
  );
}

export default PositionLeft;
