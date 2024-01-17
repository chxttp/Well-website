import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import DownloadFile from "../component/DownloadFile";
import Footer from "../component/Footer";

import bg from '../Images/certificate-banner.png'
import '../styles/CertificatePage.css'
import Certificate from "../component/Certificate";

function CertificatePage() {
 
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".CertificatePage-container").classList.add("fade-in");
  }, []);
  return (
    <div className="CertificatePage-container" >
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner-certificate">
        <div className="Banner-certificate-img">
          <img src={bg} alt="" />

        </div>
       
      </div>
      <div className="CertificatePage-content" >
        <Certificate />
      </div>
      <div className="download-section">
        <DownloadFile />
      </div>
      <div className="Footer">
        <Footer/>

      </div>
    </div>
  );
}

export default CertificatePage;
