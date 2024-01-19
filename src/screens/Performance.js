import React, {useEffect} from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import prapa1 from '../Images/prapa1.jpg'
import performancebanter from "../Images/performancebanter.jpeg";
import maemoh1 from "../Images/maemoh3.jpg";
import hongsa1 from '../Images/hongsa1.jpg'
import DownloadFile from "../component/DownloadFile";
import "../styles/Performance.css";
import PerformanceComponent from "../component/PerformanceComponent";
function Performance() {
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
          title={"เหมืองเเม่เมาะ"}
          text={
            "Preventive Maintenance (PM) AC MOTOR SLIP RING 1000kW. เหมืองแม่เมาะ จ.ลำปาง เหมืองแร่ถ่านหินลิกไนต์ ที่ใหญ่ที่สุดในประเทศไทย"
          }
          path={"/เหมืองเเม่เมาะ"}
        />
        <PerformanceComponent
          imageSrc={prapa1}
          title={"การประปาส่วนภูมิภาค (ส่วนกลาง)"}
          text={
            "บริษัท เวลเอ็นจิเนียริ่งเซอร์วิส จำกัด ยินดีต้อนร้บ การประปาส่วนภูมิภาค ฝ่ายควบคุมคุณภาพกองบำรุงรักษาและพลังงาน ฝ่ายวิศวกรรมกองออกแบบวิศวกรรม กองประมาณราคา ได้เข้าเยี่ยมชมโรงงานในครั้งนี้"
          }
          path={"/การประปา"}
        />
        <PerformanceComponent
          imageSrc={hongsa1}
          title={"โรงไฟฟ้าหงสา (สปป.ลาว)"}
          text={
            "👷‍♂️ Inspection and Overhaul มอเตอร์ไฟฟ้า AC/DC เหมืองแร่ถ่านหินลิกไนต์ ที่ใหญ่ที่สุดใน สปป.ลาว เมืองหงสา จังหวัดไซยาบูลี"
          }
          path={"/โรงไฟฟ้าหงสา"}
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
