import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import DownloadFile from "../component/DownloadFile";
import image1 from "../Images/aboutUs_banter.jpeg";
import aboutUs3 from '../Images/aboutUs3.png'
import aboutUs4 from '../Images/aboutUs4.png'
import factoryManager1 from "../Images/ทรงกรด.jpg";
import factoryManager2 from "../Images/ทรงกรด2.jpg";
import comitte1 from "../Images/ชุติการย์2.jpg";
import comitte2 from "../Images/ชุติกา1.jpg";
import managingDirector1 from "../Images/ถนอม1.jpg";
import managingDiretor2 from "../Images/ถนอม2.jpg";
// import managingDiretor3 from '../Images/tanompro.jpg'
import saleManagement1 from "../Images/ณัฐวุฒิ1.jpg";
import saleManagement2 from "../Images/ณัฐวุฒิ2.jpg";
import PhotoTextComponent from "../component/PhotoTextComponent";
import "../styles/aboutUs.css";
import PositionLeft from "../component/PostitionLeft";
import PositionRight from "../component/PositionRight";
import Engineer from "../component/Engineer";
import locales from "../data/locales";
function AboutUs() {
  const homeBanter = [image1];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".aboutUs-container").classList.add("fade-in");
  }, []);
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
  return (
    <div className="aboutUs-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="aboutUs-title">
        <h2>{locales[currentLanguage].aboutUsTitle}</h2>
      </div>

      <div className="AboutUsContent">
        <PhotoTextComponent
          image1={aboutUs3}
          image2={aboutUs4}
          text={
            locales[currentLanguage].ourHistory
          }
        />
        <div className="company-position">
          <PositionLeft
            positionText={locales[currentLanguage].managingDirectorText}
            image1={managingDiretor2}
            image2={managingDirector1}
            name={locales[currentLanguage].managingDirectorName}
            position={locales[currentLanguage].managingDirectorText}
          />
          <PositionRight
            positionText={locales[currentLanguage].directorText}
            image1={comitte1}
            image2={comitte2}
            name={locales[currentLanguage].directorName}
            position={locales[currentLanguage].directorText}
          />
          <PositionLeft
            positionText={locales[currentLanguage].factoryManagerText}
            image1={factoryManager1}
            image2={factoryManager2}
            name={locales[currentLanguage].factoryManagerName}
            position={locales[currentLanguage].factoryManagerText}
          />
          <PositionRight
            positionText={locales[currentLanguage].saleManagerText}
            image1={saleManagement1}
            image2={saleManagement2}
            name={locales[currentLanguage].saleManagerName}
            position={locales[currentLanguage].saleManagerText}
          />
        </div>
        <div>
          <Engineer/>

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

export default AboutUs;
