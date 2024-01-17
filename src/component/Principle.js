import red from '../Images/redPrinciple.jpeg'
import white from '../Images/whitePrinciple.jpeg'
import CertificateCard from '../component/CertificateCard';
import PrincipleCard from '../component/PrincipleCard';
import '../styles/Principle.css'


function Principle() {
  const PrincipleImages = [white,white,white,white,white];
  const texts = ["Excellent in Service ", "Specialize in Motor Repairs", "High Quality of Material", "Reasonable Price", "Guarantee on Services"];
  const subText = ["เป็นเลิศด้านการบริการ" , "เชี่ยวชาญงาน ซ่อมมอเตอร์" , "ใช้วัสดุคุณภาพสูง" , "ราคายุติธรรม" , "รับประกันผลงาน"]

  
  return (
    <div className="Principle-container">
      <div className="Principle-card">
        
        {PrincipleImages.map((imageUrl, index) => (
          <PrincipleCard key={index} imageUrl={imageUrl} text={texts[index]} subText={subText[index]} />
          
        ))}
      </div>
    </div>
  );
}

export default Principle;
