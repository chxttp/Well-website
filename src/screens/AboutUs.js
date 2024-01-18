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
import saleManagement1 from "../Images/ณัฐวุฒิ1.jpg";
import saleManagement2 from "../Images/ณัฐวุฒิ2.jpg";
import PhotoTextComponent from "../component/PhotoTextComponent";
import "../styles/aboutUs.css";
import PositionLeft from "../component/PostitionLeft";
import PositionRight from "../component/PositionRight";
import Engineer from "../component/Engineer";
function AboutUs() {
  const homeBanter = [image1];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".aboutUs-container").classList.add("fade-in");
  }, []);
  return (
    <div className="aboutUs-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="aboutUs-title">
        <h2>OUR HISTORY</h2>
      </div>

      <div className="AboutUsContent">
        <PhotoTextComponent
          image1={aboutUs3}
          image2={aboutUs4}
          text={
            "   บริษัท เวลเอ็นจิเนียริ่งเซอร์วิส จำกัด ก่อตั้งขึ้นเมื่อวันที่ 21 กุมภาพันธ์ พ.ศ. 2544 เราคือผู้ให้บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าทุกชนิด รวมถึงเครื่องกำเนิดไฟฟ้า ปั๊มน้ำ และโบลเวอร์ ด้วยความทุ่มเทและใส่ใจในการให้บริการ อีกทั้งการรักษาคุณภาพมาตรฐานที่ดีและตรงต่อเวลา จึงทำให้ได้รับความไว้วางใจจากลูกค้ามากขึ้น ส่งผลให้บริษัทมีการเติบโตขึ้นอย่างรวดเร็ว และได้ขยายโรงงานจากพื้นที่เดิมซึ่งเป็นโกดังขนาด 3 คูหา ไปสร้างเป็นโรงงานของตนเองบนพื้นที่ขนาด 4 ไร่ เพื่อรองรับปริมาณงานที่มากขึ้น และรองรับจำนวนพนักงานที่มากขึ้นด้วย เพื่อให้เพียงพอต่อการให้บริการลูกค้าได้อย่างรวดเร็วและมีคุณภาพ ปัจจุบัน บริษัทฯ มีพนักงานที่ประกอบไปด้วย วิศวกรไฟฟ้า วิศวกรเครื่องกล ผู้ชำนาญงาน ช่างเทคนิค ผู้ช่วยช่าง ไปจนถึงแรงงาน ที่ล้วนแล้วแต่มีประสบการณ์ในการทำงาน และได้รับการฝึกอบรมมาอย่างดีเยี่ยม เพื่อให้มีความรู้ความชำนาญ และมีความพร้อมที่จะให้บริการงานซ่อมอย่างมีคุณภาพตามเกณฑ์มาตรฐานของทางบริษัท ทั้งนี้ สิ่งที่บริษัทยังคงทำมาอย่างต่อเนื่องและสม่ำเสมอก็คือ การพัฒนาการทำงานให้มีประสิทธิภาพเพิ่มขึ้นอยู่เสมอ และให้ความสำคัญในเรื่องของการลงทุนทางด้านข้อมูล ความรู้ เทคนิค เครื่องมือ และบุคลากร เมื่อมีเครื่องมือหรือเทคโนโลยีใหม่ที่ช่วยให้งานรวดเร็ว และมีประสิทธิภาพมากขึ้น บริษัทก็พร้อมที่จะลงทุนเพื่อขับเคลื่อนให้องค์กรมีความก้าวหน้าและเติบโตยิ่งขึ้น พร้อมรองรับความต้องการของลูกค้าได้มากขึ้น นอกจากนี้ บริษัทฯ ยังได้ขยายสาขาไปยังจังหวัดต่างๆ เช่น ขอนแก่น และ กาญจนบุรี เพื่อให้บริการลูกค้าได้อย่างรวดเร็วทันเวลา และตั้งเป้าหมายที่จะขยายสาขาให้ครอบคลุมทั่วถึงทุกพื้นที่ทั่วประเทศในอนาคตอีกด้วย"
          }
        />
        <div className="company-position">
          <PositionLeft
            positionText={"MANAGING DIRECTOR"}
            image1={managingDiretor2}
            image2={managingDirector1}
            name={"คุณ ถนอม ทนุรัตนบุตร"}
            position={"กรรมการผู้จัดการ"}
          />
          <PositionRight
            positionText={"DIRECTOR"}
            image1={comitte1}
            image2={comitte2}
            name={"คุณ ชุติการย์ อุ้ยนอง "}
            position={"กรรมการ"}
          />
          <PositionLeft
            positionText={"TEMPORARY FACTORY MANAGER"}
            image1={factoryManager1}
            image2={factoryManager2}
            name={"คุณ ทรงกด กองเพชร"}
            position={"รักษาการผู้จัดการโรงงาน"}
          />
          <PositionRight
            positionText={"SALE MANAGER"}
            image1={saleManagement1}
            image2={saleManagement2}
            name={"คุณ ณัฐวุฒิ วิชัยยุทธ"}
            position={"ผู้จัดการฝ่ายขาย"}
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
