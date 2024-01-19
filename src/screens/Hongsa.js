import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import hongsaBanner from '../Images/hongsaBanner.jpg'
import "../styles/Maemoh.css";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import PerformanceDetail from "../component/PerformanceDetail";
import DownloadFile from "../component/DownloadFile";
import PerformanceList from "../component/PerformanceList";
import hongsa1 from '../Images/hongsa2.jpg'
import hongsa2 from '../Images/hongsa3.jpg'
import hongsa3 from '../Images/hongsa4.jpg'
import hongsa4 from '../Images/hongsa5.jpg'
import hongsa5 from '../Images/hongsa6.jpg'
import hongsa6 from '../Images/hongsa7.jpg'
import hongsa7 from '../Images/hongsa8.jpg'
import hongsa8 from '../Images/hongsa9.jpg'
function Maemoh() {
  const homeBanter = [hongsaBanner];
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
          <PerformanceDetail title={'โรงไฟฟ้าหงสา (สปป.ลาว)'} date={'Date : 28 Oct 2023'} image1={hongsa1} image2={hongsa2} image3={hongsa3} image4={hongsa4} image5={hongsa5} image6={hongsa6} image7={hongsa7} image8={hongsa8} text={'👷‍♂️ Inspection and Overhaul มอเตอร์ไฟฟ้า AC/DC เหมืองแร่ถ่านหินลิกไนต์ ที่ใหญ่ที่สุดใน สปป.ลาว เมืองหงสา จังหวัดไซยาบูลี'}/>
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
