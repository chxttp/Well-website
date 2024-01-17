import "../styles/PositionRight.css";
import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-reveal";
function PositionRight({ positionText, image1, image2, name, position }) {
  return (
    <div className="right-position-container">
      <div className="right-position-topic">
        <h3>{positionText}</h3>
      </div>
      <div className="right-position-content">
        <div className="right-position-photo-container">
          <Parallax className="right-photo-parallax">
            <Fade left duration={2000}>
              <img src={image1} alt="Image 1" />
              <img src={image2} alt="Image 2" />
            </Fade>
          </Parallax>
        </div>
        <div className="right-position-text-container">
          <div className="right-position-text">
            <Parallax>
              <Fade right duration={2000}>
                <p>{name}</p>
                <p>{position}</p>
              </Fade>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PositionRight;
