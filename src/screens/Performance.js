import React, {useEffect} from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import prapa1 from '../Images/prapa1.jpg'
import performancebanter from "../Images/performancebanter.jpeg";
import maemoh1 from "../Images/maemoh3.jpg";
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
            "บริษัท เวลเอ็นจิเนียริ่งเซอร์วิส จำกัด ก่อตั้งขึ้นเมื่อวันที่ 21 กุมภาพันธ์ พ.ศ. 2544 เราคือผู้ให้บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าทุกชนิด รวมถึงเครื่องกำเนิดไฟฟ้า ปั๊มน้ำ และโบลเวอร์"
          }
          path={"/เหมืองเเม่เมาะ"}
        />
        <PerformanceComponent
          imageSrc={prapa1}
          title={"การประปาส่วนภูมิภาค (ส่วนกลาง)"}
          text={
            "   บริษัท เวลเอ็นจิเนียริ่งเซอร์วิส จำกัด ก่อตั้งขึ้นเมื่อวันที่ 21 กุมภาพันธ์ พ.ศ. 2544 เราคือผู้ให้บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าทุกชนิด รวมถึงเครื่องกำเนิดไฟฟ้า ปั๊มน้ำ และโบลเวอร์"
          }
          path={"/การประปา"}
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
