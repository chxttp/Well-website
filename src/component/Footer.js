import React  from "react";
import logo from "../Images/logo.png";
import logo2 from "../Images/24hours.png";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFax, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import locales from "../data/locales";

function Footer() {
  const selectedLanguage = localStorage.getItem('defaultLanguage') || 'th';
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-link-container">
          <div className="footer-link">
            <h4>Pages</h4>
            <a href={`/${selectedLanguage}/home`}>
              <p>{locales[selectedLanguage].homeText}</p>
            </a>
            <a href={`/${selectedLanguage}/aboutus`}>
              <p>{locales[selectedLanguage].aboutUsText}</p>
            </a>
            <a href={`/${selectedLanguage}/service`}>
              <p>{locales[selectedLanguage].serviceText}</p>
            </a>
            <a href={`/${selectedLanguage}/strength`}>
              <p>{locales[selectedLanguage].keyStrengthText}</p>
            </a>
            <a href={`/${selectedLanguage}/performance`}>
              <p>{locales[selectedLanguage].performanceText}</p>
            </a>
            <a href={`/${selectedLanguage}/contact`}>
              <p>{locales[selectedLanguage].contactUsText}</p>
            </a>
          </div>
          <div className="footer-link">
            <h4>Follow us here</h4>
            <div className="social-media">
              <a
                href="https://www.facebook.com/profile.php?id=100070156996483"
                target="_blank"
                rel="noreferrer"
              >
                <p className="icon-circle">
                  <FontAwesomeIcon icon={faFacebook} />
                </p>
              </a>
              <a
                href="https://www.tiktok.com/@wellengineering?fbclid=IwAR2mMggkMrrCXoLN8cOgGaESd2xvapGQtXTOhxP4S97dMwPLn4cMP1T_pYM"
                target="_blank"
                rel="noreferrer"
              >
                <p className="icon-circle">
                  <FontAwesomeIcon icon={faTiktok} />
                </p>
              </a>

              <a
                href="https://www.instagram.com/wellengineering2019/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="icon-circle">
                  <FontAwesomeIcon icon={faInstagram} />
                </p>
              </a>
              <a
                href="https://twitter.com/well21022001?fbclid=IwAR2HiUAUZpTd2h-VbH-Jb8iZtIemfzjKZPnW-jYERv9uitwROsuVxBrFPV0"
                target="_blank"
                rel="noreferrer"
              >
                <p className="icon-circle">
                  <FontAwesomeIcon icon={faTwitter} />
                </p>
              </a>
            </div>
          </div>

          <div className="footer-link">
            <h4>Contact</h4>
            <img src={logo2} alt="" className="contact-logo" />

            <p>
              <FontAwesomeIcon icon={faPhone} /> : (66) 0 2397 9324
            </p>

            <p>
              <FontAwesomeIcon icon={faFax} /> : (66) 0 2397 9324
            </p>

            <p>
              <FontAwesomeIcon icon={faEnvelope} /> : well@well-engineering.com
            </p>
          </div>
        </div>
        <hr></hr>

        <div className="footer-below">
          <div className="footer-copyright">
            <div className="copyright-img">
              <img src={logo} alt="" />
            </div>
            <h4>
              @{new Date().getFullYear()} Well Engineering Service Co.,LTD.
              Motor Service Center.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
