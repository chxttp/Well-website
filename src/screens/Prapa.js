import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import "../styles/Maemoh.css";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import PerformanceDetail from "../component/PerformanceDetail";
import DownloadFile from "../component/DownloadFile";
import PerformanceList from "../component/PerformanceList";
import prapa2 from '../Images/prapa2.jpg'
import prapa3 from '../Images/prapa3.jpg'
import prapa4 from '../Images/prapa4.jpg'
import prapa6 from '../Images/prapa6.jpg'
import prapa7 from '../Images/prapa7.jpg'
import prapa8 from '../Images/prapa8.jpg'
import prapa9 from '../Images/prapa9.jpg'
import prapa10 from '../Images/prapa10.jpg'
import prapa11 from '../Images/prapa11.jpg'
import locales from "../data/locales";
function Prapa() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
  const homeBanter = [prapa2];
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
        <PerformanceDetail title={locales[currentLanguage].performance2Title} date={'Date : 17 Nov 2023'} image1={prapa3} image2={prapa4} image3={prapa6} image4={prapa7} image5={prapa8} image6={prapa9} image7={prapa10} image8={prapa11}  text={locales[currentLanguage].performance2Text}/>
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

export default Prapa;