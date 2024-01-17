import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/VideoSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4"
const VideoSlider = () => {
  const videos = [video4, video3];
  const [playing, setPlaying] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => {
      if (playing) {
        const videoElements = document.querySelectorAll("video");
    videoElements.forEach(video => video.pause());
      }
    },
    prevArrow: <CustomPrevArrow/>,
    nextArrow: <CustomNextArrow />,
  };

  const handlePlay = (video) => {
    // Set the playing video
    setPlaying(video);
  };

  return (
    <div className="video-container">
      <div className="video-text">
        <h3>VIDEO</h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="video-content">
              <video
                controls
                loop
                className="video"
                onPlay={() => handlePlay(document.querySelector(`#video-${index}`))}
                id={`video-${index}`}
                
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);
export default VideoSlider;

