import React, {useEffect} from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import prapa1 from '../Images/prapa1.jpg'
import performancebanter from "../Images/performancebanter.jpeg";
import maemoh1 from "../Images/maemoh3.jpg";
import hongsa1 from '../Images/hongsa1.jpg'
import DownloadFile from "../component/DownloadFile";
import locales from "../data/locales";
import "../styles/Performance.css";
import PerformanceComponent from "../component/PerformanceComponent";
function Performance() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector(".Performance-container").classList.add("fade-in");
      }, []);

  const homeBanter = [performancebanter];
  return (
    
    <div className="Performance-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="Performance-detail">
        <PerformanceComponent
          imageSrc={maemoh1}
          title={locales[currentLanguage].performance1Title}
          text={
            locales[currentLanguage].performance1Text
          }
          path={`/${currentLanguage}/เหมืองเเม่เมาะ`}
        />
        <PerformanceComponent
          imageSrc={prapa1}
          title={locales[currentLanguage].performance2Title}
          text={
            locales[currentLanguage].performance2Text
          }
          path={`/${currentLanguage}/การประปา`}
        />
        <PerformanceComponent
          imageSrc={hongsa1}
          title={locales[currentLanguage].performance3Title}
          text={
            locales[currentLanguage].performance3Text
          }
          path={`/${currentLanguage}/โรงไฟฟ้าหงสา`}
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

export default Performance;
