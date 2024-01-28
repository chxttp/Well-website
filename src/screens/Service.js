import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import '../styles/Service.css'
import DownloadFile from "../component/DownloadFile";
import servicebanter from '../Images/sevicebanter.jpeg'
import ServiceContent from "../component/ServiceContent";
import serviceMotor1 from "../Images/service-motor1.png";
import serviceMotor2 from "../Images/service-motor2.png";
import serviceGenerator1 from "../Images/service-generator1.png"
import serviceGenerator2 from "../Images/service-generator2.png"
import serviceDry1 from "../Images/service-dry1.png"
import serviceDry2 from "../Images/service-dry2.jpeg"
import serviceOnsite1 from "../Images/service-onsite1.jpg"
import serviceOnsite2 from "../Images/service-onsite2.jpg"
import serviceOnsite3 from "../Images/service-onsite3.jpg"
import serviceOnsite4 from "../Images/service-onsite4.jpg"
import locales from "../data/locales";


function Service() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
    const homeBanter = [servicebanter];
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
        <ServiceContent topic={locales[currentLanguage].motorTopic} imageLeft={serviceMotor1} imageRight={serviceMotor2} topic2={"Repair & Maintenance Motor"}text={locales[currentLanguage].motorText} />
        <ServiceContent topic={locales[currentLanguage].generatorTopic} imageLeft={serviceGenerator1} imageRight={serviceGenerator2} topic2={"Repair & Maintenance Generator"}text={locales[currentLanguage].generatorText}/>
        <ServiceContent topic={locales[currentLanguage].transformerTopic} imageLeft={serviceDry1} imageRight={serviceDry2} topic2={"Repair & Maintenance Dry Type Transformer"}text={locales[currentLanguage].transformerText}/>
        <ServiceContent topic={locales[currentLanguage].onsiteTopic} imageLeft={serviceOnsite1} imageRight={serviceOnsite2} image3={serviceOnsite3} image4={serviceOnsite4} topic2={"Onsite Repair & Maintenance Service"}text={locales[currentLanguage].onsiteText}/>
        
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

export default Service;
