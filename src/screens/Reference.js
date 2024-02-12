import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import DownloadFile from "../component/DownloadFile";
import referencebanter from "../Images/referenceBanner.jpg";
import ReferenceContent from "../component/ReferenceContent";
import locales from "../data/locales";
import reference1 from '../Images/reference1.jpg'
import reference2 from '../Images/reference2.jpg'
import reference3 from '../Images/reference3.jpg'
import reference4 from '../Images/reference4.jpg'
import reference5 from '../Images/reference5.jpg'
import reference6 from '../Images/reference6.jpg'
import reference7 from '../Images/reference7.jpg'
import reference8 from '../Images/reference8.jpg'
import reference9 from '../Images/reference9.jpg'
import reference10 from '../Images/reference10.jpg'
function Reference() {
    const currentLanguage = window.location.pathname.split('/')[1] || 'th';
    const homeBanter = [referencebanter];
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector(".Service-container").classList.add("fade-in");
      }, []);
  return (
    <div className="Service-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="Service-detail">
        <ReferenceContent topic={locales[currentLanguage].referenceText2} image1={reference1} image2={reference2} image3={reference3} image4={reference4} image5={reference5} image6={reference6} image7={reference7} image8={reference8} image9={reference9} image10={reference10}/>
        
      </div>
      <div className="download-section">
        <DownloadFile/>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Reference;
