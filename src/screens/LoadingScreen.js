import React from "react";
import '../styles/LoadingScreen.css'
import loadingImg from '../Images/Newyear.jpg'

const LoadingScreen = () => {
  return (
    <div className="loading-container">
        <div className="loading-img">
        <img src={loadingImg} alt="loading-img" />
        </div>
        {/* <div className="loading-content">
        <h1>Welcome to well</h1>

        </div> */}


    </div>
  );
};

export default LoadingScreen;
