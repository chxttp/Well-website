import CertificateCard from "./CertificateCard";
import "../styles/Certificate.css";
import image1 from "../Images/Certificate1.JPG";
import image2 from "../Images/Certificate2.JPG";
import image3 from "../Images/Certificate3.JPG";
import image4 from "../Images/Certificate4.JPG";
import image5 from "../Images/Certificate5.JPG";
import image6 from "../Images/Certificate6.jpg"
// import image7 from "../Images/Certificate7.jpg";
// import image8 from "../Images/Certificate8.jpg";

function Certificate() {
  const certificateData = [
    { imageUrl: image1, cardTitle: "Certificate", cardName: "Certificate Detail 1" },
    { imageUrl: image2, cardTitle: "Certificate", cardName: "Certificate Detail 2" },
    { imageUrl: image3, cardTitle: "Certificate", cardName: "Certificate Detail 3" },
    { imageUrl: image4, cardTitle: "Certificate", cardName: "Certificate Detail 4" },
    { imageUrl: image5, cardTitle: "Certificate", cardName: "Certificate Detail 5" },
    { imageUrl: image6, cardTitle: "Certificate", cardName: "Certificate Detail 6" },
  ];
  return (
    <div className="Certificate-container">
      <div className="Certificate-text">
        <h3>CERTIFICATE</h3>
      </div>
      <div className="Certificate-card">
        {certificateData.map((data, index) => (
           <CertificateCard key={index} imageUrl={data.imageUrl} cardTitle={data.cardTitle} cardName={data.cardName} />
        ))}

      {/* <CertificateCard imageUrl={image7} isMiddleCard={true} />
      <CertificateCard imageUrl={image8} isMiddleCard={true} /> */}
      {/* <CertificateCard imageUrl={image8} isMiddleCard={true} /> */}

        
      </div>
    </div>
  );
}

export default Certificate;
