import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/VideoSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import videoPoster1 from '../Images/videoPoster1.jpg'
import videoPoster2 from '../Images/videoPoster3.jpg'
import videoPoster3 from '../Images/videoPoster4.jpg'
import videoPoster4 from '../Images/videoPoster5.jpg'
import videoPoster5 from '../Images/videoPoster6.jpg'
import videoPoster6 from '../Images/videoPoster7.jpg'
import videoPoster7 from '../Images/videoPoster8.jpg'
import videoPoster8 from '../Images/videoPoster9.jpg'


import video1 from '../videos/Video1.mp4'
// import video2 from '../videos/Video2.mp4'
import video3 from '../videos/Video6.mp4'
import video4 from '../videos/Video7.mp4'
import video5 from '../videos/Video8.mp4'
import video6 from '../videos/Video9.mp4'
import video7 from '../videos/Video10.mp4'
import video8 from '../videos/Video11.mp4'
import video9 from '../videos/Video12.mp4'
import locales from "../data/locales";


const VideoSlider = () => {
  const currentLanguage = localStorage.getItem('defaultLanguage') || 'th'; // Get the current language
  const videos = [video1, video3, video4, video5, video6, video7, video8, video9];
  const [playing, setPlaying] = useState(null);
  const posters = [videoPoster1,videoPoster2, videoPoster3, videoPoster4, videoPoster5, videoPoster6, videoPoster7, videoPoster8];

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
        <h3>{locales[currentLanguage].videoText}</h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="video-content">
              <video
                controls
                loop
                className="video"
                poster={posters[index]}
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

