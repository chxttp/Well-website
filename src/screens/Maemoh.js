import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import image5 from "../Images/image5.png";
import maemohBanner from "../Images/maemohBanner.png";
import "../styles/Maemoh.css";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import PerformanceDetail from "../component/PerformanceDetail";
import DownloadFile from "../component/DownloadFile";
import PerformanceList from "../component/PerformanceList";
function Maemoh() {
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
          <PerformanceDetail />
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
