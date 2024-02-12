import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Card from "../component/Card";
import DownloadFile from "../component/DownloadFile.js";
import Principle from "../component/Principle";
import "../styles/Home.css";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import image5 from "../Images/image5.png";
import locales from "../data/locales";
import image6 from "../Images/image6.jpeg";
// import home1 from '../Images/newhome1.jpg'
// import home2 from '../Images/newhome2.jpg'
// import home3 from '../Images/newhome3.jpg'
// import home4 from '../Images/newhome4.jpg'
import allCertificate from "../Images/all-certifiicate.png";
// eslint-disable-next-line
import VideoPlayer from "../component/VideoPlayer";
import VideoSlider from "../component/VideoSlide";
import ServiceShowcase from "../component/ServiceShowcase";
import { useNavigate } from "react-router-dom";

function Home() {
  const currentLanguage = window.location.pathname.split('/')[1] || 'th';
  const navigate = useNavigate();
  const homeBanter = [image3, image4, image5, image6];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".home-container").classList.add("fade-in");
  }, []);

  const handleShowMoreClick = () => {
    navigate(`/${currentLanguage}/certificate`);
  };

  return (
    <div className="home-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="Policy">
        <Card />
      </div>
      <div className="Service">
        <ServiceShowcase />
      </div>

      <div className="Principle">
        <Principle />
      </div>
      <div className="Video">
        <VideoSlider />
      </div>

      <div className="Certificate">
        <div className="Certificate-section-text">
          <h3>{locales[currentLanguage].certificateText}</h3>
        </div>
        <div className="Certificate-img">
          <img src={allCertificate} alt="" />
        </div>
        <div>
          <button onClick={handleShowMoreClick}>Show More </button>
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

export default Home;
