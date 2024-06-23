'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Baner = () => {
  return (
    <>
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/images/slider-1.jpg" alt="slide1" 
          height={600}
          width={2000}
          
          />
        </SwiperSlide>
        <SwiperSlide>  <Image src="/images/slider-2.jpg" alt="slide1" 
        width={2000}
        height={600}
        /></SwiperSlide>
      </Swiper>
    
    </>
  )
}

export default Baner