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
// import serviceMotor1 from "../Images/service-motor1.png";
// import serviceGenerator1 from "../Images/service-generator1.png"
// import serviceDry1 from "../Images/service-dry1.png"
import serviceOnsite1 from "../Images/service-onsite1.jpg"
import serviceOnsite2 from "../Images/service-onsite2.jpg"
import showcase1 from '../Images/showcase1.jpg'
import showcase2 from '../Images/showcase2.jpg'
import showcase3 from '../Images/showcase3.jpg'
import showcase4 from '../Images/showcase4.jpg'
import showcase5 from '../Images/showcase5.jpg'
import showcase6 from '../Images/showcase6.jpg'
import showcase7 from '../Images/showcase7.jpg'


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
          <img src={showcase1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={showcase2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={showcase3} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={showcase4} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={showcase5} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={showcase6} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={showcase7} alt=''/>
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
