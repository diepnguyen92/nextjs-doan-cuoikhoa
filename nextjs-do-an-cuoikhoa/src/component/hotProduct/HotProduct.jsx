'use client'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {  Pagination} from 'swiper/modules';
import GetApi from '@/app/hooks/GetApi';
import { URL_API } from '@/app/api/urlApi';
const HotProduct = () => {
  const {data} = GetApi(URL_API)
  console.log(data);
  return (
    <>
     <div className="bg-banerHome bg-cover bg-center w-full h-[600px] mb-5 bg-[inherit]">
     <Container className="pt-5">
          <h1 className="text-[28px] text-center font-semibold mb-5">SẢN PHẨM NỔI BẬT</h1>
          <Swiper
           slidesPerView={4}
           spaceBetween={15}
           pagination={{
             clickable: true,
           }}
        
           modules={[Pagination]}
           className="mySwiper"
      >
        {data && data.map(item=>
        <SwiperSlide key={item.id} className="border-[color:var(--primary-color)] text-2xl text-center   rounded-[20px] border-[1px] border-solid; p-[5px] relative ">

       
              <div className="absolute w-10 h-10 bg-[red] text-[white] flex items-center text-sm justify-center rounded-[50%]">
                {" "}
                -10%
              </div>
              <img src={item.image} alt={item.name} className='h-[300px] max-w-full' />
              <div
                className='font-family: "Roboto";'
              >
                <div className="text-lg font-bold mb-2"> {item.name}</div>
                <div className="flex justify-center items-center text-lg">
                  <div className="font-bold text-red-500 mr-5">{item.newPrice} đ</div>
                  <div className="opacity-70 line-through">{item.oldPrice} đ</div>
                </div>
              </div>
              <button className="text-base bg-[#669933] text-[white] px-[15px] py-[10px] rounded-[20px] mb-2 mt-2">Thêm vào giỏ hàng</button>
            
        </SwiperSlide>
      )}
      </Swiper>
   
         
        </Container>
   
      </div>
    </>
  )
}

export default HotProduct