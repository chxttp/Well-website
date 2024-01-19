import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import strength3 from "../Images/strength3.jpeg";
import strength4 from "../Images/strength4.png";
import strength5 from "../Images/strength5.png";
import strength6 from "../Images/strength6.png";
import DownloadFile from "../component/DownloadFile";

import "../styles/KeyStrength.css";
import strengthBanner from "../Images/strengthBanner.jpeg";
import StrengthPolicy from "../component/StrengthPolicy";
import StrengthCertified from "../component/StrengthCertified";
function KeyStrength() {
  const homeBanter = [strengthBanner];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".key-strength-container").classList.add("fade-in");
  }, []);
  return (
    <div className="key-strength-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="key-strength-policy">
        <StrengthPolicy />
      </div>
      <div className="key-strength-certified">
        <div className="key-strength-certified-title">
          <h2>CERTIFIED</h2>
        </div>

        <StrengthCertified
          // text1={
          //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula ipsum a arcu."
          // }
          // text2={
          //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula ipsum a arcu."
          // }
          image1={strength3}
          image2={strength4}
        />
        <StrengthCertified
          // text1={
          //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula ipsum a arcu."
          // }
          // text2={
          //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula ipsum a arcu."
          // }
          image1={strength5}
          image2={strength6}
        />
      </div>
      <div className="download-section">
        <DownloadFile />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default KeyStrength;
