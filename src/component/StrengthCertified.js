import '../styles/StrengthCertified.css'
import { Parallax } from 'react-scroll-parallax';
import { Fade } from 'react-reveal';
function StrengthCertified({ text1, text2, image1,image2 }) {
  return (
    <div className="strength-certified-container">
      {/* <div className="strength-certified-title">
        <h2>CERTIFIED</h2>
      </div> */}
      <div className="strength-certified-wrapper">
        <div className="strength-certified-content1">
          <Parallax className='strength-certified-parallax'>
            <Fade up duration={2000}>
            <div className="strength-certified-image">
            <img src={image1} alt="" />
          </div>
          <div className="strength-certified-text-container">
            <div className="strength-certified-text">
              <p>{text1}</p>
            </div>
          </div>

            </Fade>
          </Parallax>
          

        </div>

        <div className="strength-certified-content2">
          <Parallax className='strength-certified-parallax'>
            <Fade up duration={2000}>
            <div className="strength-certified-image">
            <img src={image2} alt="" />
          </div>
          <div className="strength-certified-text-container">
            <div className="strength-certified-text">
              <p>{text2}</p>
            </div>
          </div>

            </Fade>
          </Parallax>
          
        </div>
      </div>
    </div>
  );
}

export default StrengthCertified;
