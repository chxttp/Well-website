import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Banner.css";


function Banner({images}) {
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false, // Hide navigation arrows
    height: "50vh",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Manually trigger the next slide
      slickNext();
    }, 6000);

    setAutoplayInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slickNext = () => {
    // Ensure sliderRef is not null before calling slickNext
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="banner-container">
      <div className="top-banner"></div>
      <Slider ref={sliderRef} {...settings} className="slide">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image${index + 1}`} />
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
