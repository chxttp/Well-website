import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import "../styles/Maemoh.css";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import PerformanceDetail from "../component/PerformanceDetail";
import DownloadFile from "../component/DownloadFile";
import PerformanceList from "../component/PerformanceList";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import prapa2 from '../Images/prapa2.jpg'
function Prapa() {
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
        <PerformanceDetail title={'การประปาส่วนภูมิภาค (ส่วนกลาง)'} date={'วันที่ 10 ธ.ค. 2566'} image1={image1} image2={image2} image3={image3} image4={image4} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ametcommodo nulla facilisi nullam vehicula ipsum a arcu.'}/>
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
