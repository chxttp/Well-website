import "../styles/Engineer.css";
import EngineerProfile from "../Images/engineer-img.JPG";
import EngineerTag from "../Images/engineer-tag.JPG";
import Engineer1 from "../Images/enginner1.jpg";
import Engineer2 from "../Images/enginner2.jpg";
import Engineer3 from "../Images/engineer3.jpg";
import Engineer4 from "../Images/engineer4.jpg";
import Engineer5 from "../Images/engineer5.jpg";
import Engineer6 from "../Images/engineer6.jpg";
function Engineer() {
  return (
    <div className="Engineer-container">
      <div className="Engineer-title">
        <h2>หนังสือแต่งตั้งวิศวกร</h2>
      </div>
      <div className="Engineer-img-container">
        <div className="Engineer-img-container-1">
          <div className="Engineer-img-profile">
            <img src={EngineerProfile} alt="" />
          </div>
          <div className="Engineer-img-tag">
            <img src={EngineerTag} alt="" />
          </div>
        </div>

        <div className="Engineer-img-container-2">
          <div className="Engineer-img-content1">
            <img src={Engineer1} alt="" />
          </div>
          <div className="Engineer-img-content3">
            <img src={Engineer5} alt="" />
          </div>
          <div className="Engineer-img-content2">
            <img src={Engineer2} alt="" />
          </div>
          <div className="Engineer-img-content4">
            <img src={Engineer6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineer;
