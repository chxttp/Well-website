import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/ServiceShowcase.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';
import serviceMotor1 from "../Images/service-motor1.png";
import serviceGenerator1 from "../Images/service-generator1.png"
import serviceDry1 from "../Images/service-dry1.png"
import serviceOnsite1 from "../Images/service-onsite1.png"
import serviceOnsite2 from "../Images/service-onsite2.png"



const ServiceShowcase = () => {
  

  return (
    <div className='swiper-container'>
       <div className="swiper-text">
        <h3>SERVICES</h3>
      </div>

      <Swiper
        effect={'coverflow'}
      
        centeredSlides={true}
        slidesPerView={'2'}
       loop={true}
       autoplay={true}
       spaceBetween={60}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
       
       
        
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={serviceMotor1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={serviceGenerator1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={serviceDry1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={serviceOnsite1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={serviceOnsite2} alt=''/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default ServiceShowcase;
