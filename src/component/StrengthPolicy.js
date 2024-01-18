import strength2 from '../Images/strength2.jpeg'
import {  Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import '../styles/StrengthPolicy.css'
const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(-40px);
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

function StrengthPolicy() {
    return (
        <div className="key-strength-wrapper">
        <div className="key-strength-photo-container">
          <Reveal keyframes={fadeInLeft} delay={300} duration={600} triggerOnce className='strength-reveal'>
          <img src={strength2} alt=""  className='key-strength-image'/>

          </Reveal>
          
           

            

          
        </div>
        <div className="key-strength-text-container">
          <div className="text-box">
            <h2>นโยบายของเรา</h2>
            <p>
              "ตรงต่อเวลา คุณภาพมาตรฐาน คือบริการของเวล"
              สิ่งสำคัญที่ทำให้ลูกค้าเชื่อมั่นและไว้วางใจบริษัทมายาวนาน
              คือการรักษามาตรฐาน 2 อย่างให้คงที่เสมอ นั่นคือ "ตรงต่อเวลา" และ
              "คุณภาพของงาน"จากประสบการณ์ที่ผ่านมา
              เราได้เรียนรู้และตระหนักถึงความสำคัญของ "เวลา"
              ที่ส่งผลต่อธุรกิจของลูกค้าอย่างมาก ดังนั้น
              หากมีความเสียหายเกิดขึ้นกับมอเตอร์ซึ่งทำให้การผลิตสินค้าต้องหยุดชะงัก
              ทางบริษัทสามารถเป็นอีกหนึ่งแรงสนับสนุน ธุรกิจของลูกค้าได้
              ด้วยการให้บริการแก้ไขปัญหา ซ่อมแซม
              และส่งมอบมอเตอร์กลับให้ลูกค้าโดยเร็วที่สุด
              เพื่อให้ทันตามกำหนดนัดหมาย และเพื่อรักษาผลประโยชน์ของ
              ลูกค้าให้ได้มากที่สุด
            </p>
          </div>
          <div className="text-box">
            {/* <h2>Text Box 2</h2> */}
            <p>
              นอกจากนี้ เรายังให้ความสำคัญในเรื่องของ "คุณภาพของงาน"
              แม้ว่างานจะเร่ง ด่วนเพียงใด
              ทีมงานทุกคนจะต้องยึดมั่นในเรื่องการรักษาคุณภาพการทำงานให้ได้ตามมาตรฐานของบริษัท
              และที่สำคัญ
              เรามีทีมงานที่มีความรู้และความเชี่ยวชาญในงานอย่างแท้จริง
              เพื่อสานต่อและดำเนินการให้ประสบความสำเร็จตามเป้าหมาย
            </p>
          </div>
        </div>
      </div>
      );
}

export default StrengthPolicy;
