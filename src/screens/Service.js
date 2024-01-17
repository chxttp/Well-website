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
import serviceOnsite1 from "../Images/service-onsite1.png"
import serviceOnsite2 from "../Images/service-onsite2.png"
import serviceOnsite3 from "../Images/service-onsite3.png"
import serviceOnsite4 from "../Images/service-onsite4.png"


function Service() {
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
        <ServiceContent topic={"MOTOR"} imageLeft={serviceMotor1} imageRight={serviceMotor2} topic2={"Repair & Maintenance Motor"}text={"บริษัท เวลเอ็นจีเนียริ่งเซอร์วิส จำกัด เป็นศูนย์บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าอุตสาหกรรมทุกชนิด ทั้ง AC Motor, DC Motor และ MV Motor รวมถึงอุปกรณ์ที่เกี่ยวข้องกับมอเตอร์ เช่น เกียร์ ปั๊มน้ำ เครื่องเป่าลม (blower) เครื่องกำเนิดไฟฟ้า (generator) และ หม้อแปลงไฟฟ้า (Dry type transformer)  โดยมีลูกค้าหลักเป็นกลุ่มโรงงานอุตสาหกรรมทั่วไป อาทิ อุตสาหกรรมเหล็ก อุตสาหกรรมปูน อุตสาหกรรมกระดาษ อุตสาหกรรมน้ำตาล โรงไฟฟ้า อุตสาหกรรมปิโตรเคมี และ อุตสาหกรรมผลิตอาหาร เป็นต้น ซึ่งใช้มอเตอร์ไฟฟ้าเป็นจำนวนมาก "} />
        <ServiceContent topic={"GENERATOR"} imageLeft={serviceGenerator1} imageRight={serviceGenerator2} topic2={"Repair & Maintenance Geneator"}text={"บริษัท เวลเอ็นจีเนียริ่งเซอร์วิส จำกัด เป็นศูนย์บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าอุตสาหกรรมทุกชนิด ทั้ง AC Motor, DC Motor และ MV Motor รวมถึงอุปกรณ์ที่เกี่ยวข้องกับมอเตอร์ เช่น เกียร์ ปั๊มน้ำ เครื่องเป่าลม (blower) เครื่องกำเนิดไฟฟ้า (generator) และ หม้อแปลงไฟฟ้า (Dry type transformer)  โดยมีลูกค้าหลักเป็นกลุ่มโรงงานอุตสาหกรรมทั่วไป อาทิ อุตสาหกรรมเหล็ก อุตสาหกรรมปูน อุตสาหกรรมกระดาษ อุตสาหกรรมน้ำตาล โรงไฟฟ้า อุตสาหกรรมปิโตรเคมี และ อุตสาหกรรมผลิตอาหาร เป็นต้น ซึ่งใช้มอเตอร์ไฟฟ้าเป็นจำนวนมาก "}/>
        <ServiceContent topic={"DRY TYPE TRANSFORMER"} imageLeft={serviceDry1} imageRight={serviceDry2} topic2={"Repair & Maintenance Dry Type Transformer"}text={"บริษัท เวลเอ็นจีเนียริ่งเซอร์วิส จำกัด เป็นศูนย์บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าอุตสาหกรรมทุกชนิด ทั้ง AC Motor, DC Motor และ MV Motor รวมถึงอุปกรณ์ที่เกี่ยวข้องกับมอเตอร์ เช่น เกียร์ ปั๊มน้ำ เครื่องเป่าลม (blower) เครื่องกำเนิดไฟฟ้า (generator) และ หม้อแปลงไฟฟ้า (Dry type transformer)  โดยมีลูกค้าหลักเป็นกลุ่มโรงงานอุตสาหกรรมทั่วไป อาทิ อุตสาหกรรมเหล็ก อุตสาหกรรมปูน อุตสาหกรรมกระดาษ อุตสาหกรรมน้ำตาล โรงไฟฟ้า อุตสาหกรรมปิโตรเคมี และ อุตสาหกรรมผลิตอาหาร เป็นต้น ซึ่งใช้มอเตอร์ไฟฟ้าเป็นจำนวนมาก "}/>
        <ServiceContent topic={"ONSITE SERVICE"} imageLeft={serviceOnsite1} imageRight={serviceOnsite2} image3={serviceOnsite3} image4={serviceOnsite4} topic2={"Onsite Repair & Maintenance Service"}text={"บริษัท เวลเอ็นจีเนียริ่งเซอร์วิส จำกัด เป็นศูนย์บริการซ่อมและบำรุงรักษามอเตอร์ไฟฟ้าอุตสาหกรรมทุกชนิด ทั้ง AC Motor, DC Motor และ MV Motor รวมถึงอุปกรณ์ที่เกี่ยวข้องกับมอเตอร์ เช่น เกียร์ ปั๊มน้ำ เครื่องเป่าลม (blower) เครื่องกำเนิดไฟฟ้า (generator) และ หม้อแปลงไฟฟ้า (Dry type transformer)  โดยมีลูกค้าหลักเป็นกลุ่มโรงงานอุตสาหกรรมทั่วไป อาทิ อุตสาหกรรมเหล็ก อุตสาหกรรมปูน อุตสาหกรรมกระดาษ อุตสาหกรรมน้ำตาล โรงไฟฟ้า อุตสาหกรรมปิโตรเคมี และ อุตสาหกรรมผลิตอาหาร เป็นต้น ซึ่งใช้มอเตอร์ไฟฟ้าเป็นจำนวนมาก "}/>
        
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
