import CertificateCard from "./CertificateCard";
import "../styles/Certificate.css";
import image1 from "../Images/Certificate1.JPG";
import image2 from "../Images/Certificate2.JPG";
import image3 from "../Images/Certificate3.JPG";
import image4 from "../Images/Certificate4.JPG";
import image5 from "../Images/Certificate5.JPG";
import image6 from "../Images/Certificate6.jpg"
import locales from "../data/locales";

function Certificate() {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; 
  const certificateData = [
    { imageUrl: image1, cardTitle: "CERTIFICATE 1", cardName: "ISO 14001:2015" },
    { imageUrl: image2, cardTitle: "CERTIFICATE 2", cardName: "ISO 45001:2018" },
    { imageUrl: image3, cardTitle: "CERTIFICATE 3", cardName: "THAI SME-GP" },
    { imageUrl: image4, cardTitle: "CERTIFICATE 4", cardName: "ISO 9001:2015" },
    { imageUrl: image5, cardTitle: "CERTIFICATE 5", cardName: "GREEN INDUSTRY LEVEL : 3" },
    { imageUrl: image6, cardTitle: "CERTIFICATE 6", cardName: "EASA MEMBER 2023-2024" },
  ];
  return (
    <div className="Certificate-container">
      <div className="Certificate-text">
        <h3>{locales[currentLanguage].certificateText}</h3>
      </div>
      <div className="Certificate-card">
        {certificateData.map((data, index) => (
           <CertificateCard key={index} imageUrl={data.imageUrl} cardTitle={data.cardTitle} cardName={data.cardName} />
        ))}      
      </div>
    </div>
  );
}

export default Certificate;
