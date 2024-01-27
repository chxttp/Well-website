import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import maemohBanner from "../Images/maemohBanner.png";
import "../styles/Maemoh.css";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import PerformanceDetail from "../component/PerformanceDetail";
import DownloadFile from "../component/DownloadFile";
import PerformanceList from "../component/PerformanceList";
import maemoh1 from '../Images/maemoh1.jpg'
import maemoh2 from '../Images/maemoh2.jpg'
import maemoh3 from '../Images/maemoh4.jpg'
import maemoh4 from '../Images/maemoh5.jpg'
import maemoh5 from '../Images/maemoh6.jpg'
import maemoh6 from '../Images/maemoh7.jpg'
import maemoh7 from '../Images/maemoh8.jpg'
import maemoh8 from '../Images/maemoh9.jpg'
import locales from "../data/locales";
function Maemoh() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
  const homeBanter = [maemohBanner];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".Maemoh-container").classList.add("fade-in");
  }, []);

  return (
    <div className="Maemoh-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner2">
        <Banner images={homeBanter} />
      </div>
      <div className="Maemoh-detail">
        <div className="Performance-detail">
          <PerformanceDetail title={locales[currentLanguage].performance1Title} date={'Date : 28 Nov 2023'} image1={maemoh1} image2={maemoh2} image3={maemoh3} image4={maemoh4} image5={maemoh5} image6={maemoh6} image7={maemoh7} image8={maemoh8} text={locales[currentLanguage].performance1Text}/>
        </div> 

        <div className="Performance-list">
          <PerformanceList />
        </div>
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

export default Maemoh;
