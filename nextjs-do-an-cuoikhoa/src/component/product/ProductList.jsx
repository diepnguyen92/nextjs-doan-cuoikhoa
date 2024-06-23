'use client'


import { URL_API } from '@/app/api/urlApi';
import GetApi from '@/app/hooks/GetApi';

import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
const {data} = GetApi(URL_API)
// console.log(data);
  return (
    <>
      <Container>
        <Row>
          {data && data.map(item=>
          <Col md={6} lg={4} sm={12} xl={3} key={item.id}>
            <div className="w-full border-[color:var(--primary-color)] text-2xl text-center  m-2.5 rounded-[20px] border-[1px] border-solid; p-[5px] relative">
              <div className="absolute w-10 h-10 bg-[red] text-[white] flex items-center text-sm justify-center rounded-[50%]">
                {" "}
                -10%
              </div>
              <img src={item.image} alt={item.name} className='h-[300px]  max-w-full ' />
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
            </div>
          </Col>)}
          
        </Row>
        <div className='w-full text-center my-[15px]'>
          <button className='border-[1px] border-[color:var(--primary-color)] border-solid text-center text-[color:var(--primary-color)] text-xl px-[30px] py-[5px] rounded-[20px]'>Xem thêm</button></div>
      </Container>
     
      <Container>
       <Row className="w-75 m-auto mb-5">
        <div className='flex items-center'>
        <b></b>
      <span className="text-[28px] text-center font-semibold mx-[20px] my-0">TRÁI CÂY NHẬP KHẨU</span>
      <b></b></div>
      
      </Row>
      </Container>
      <Container>
        <Row>
          {data && data.map(item=>
          <Col md={6} lg={4} sm={12} xl={3} key={item.id}>
            <div className="w-full border-[color:var(--primary-color)] text-2xl text-center  m-2.5 rounded-[20px] border-[1px] border-solid; p-[5px] relative">
              <div className="absolute w-10 h-10 bg-[red] text-[white] flex items-center text-sm justify-center rounded-[50%]">
                {" "}
                -10%
              </div>
              <img src={item.image} alt={item.name} className='h-[300px]  max-w-full ' />
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
            </div>
          </Col>)}
          
        </Row>
        <div className='w-full text-center my-[15px]'>
          <button className='border-[1px] border-[color:var(--primary-color)] border-solid text-center text-[color:var(--primary-color)] text-xl px-[30px] py-[5px] rounded-[20px]'>Xem thêm</button></div>
      </Container>
      <Container>
       <Row className="w-75 m-auto mb-5">
        <div className='flex items-center'>
        <b></b>
      <span className="text-[28px] text-center font-semibold mx-[20px] my-0">TRÁI CÂY NỘI ĐỊA</span>
      <b></b></div>
      
      </Row>
      </Container>
      <Container>
        <Row>
          {data && data.map(item=>
          <Col md={6} lg={4} sm={12} xl={3} key={item.id}>
            <div className="w-full border-[color:var(--primary-color)] text-2xl text-center  m-2.5 rounded-[20px] border-[1px] border-solid; p-[5px] relative">
              <div className="absolute w-10 h-10 bg-[red] text-[white] flex items-center text-sm justify-center rounded-[50%]">
                {" "}
                -10%
              </div>
              <img src={item.image} alt={item.name} className='h-[300px]  max-w-full ' />
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
            </div>
          </Col>)}
          
        </Row>
        <div className='w-full text-center my-[15px]'>
          <button className='border-[1px] border-[color:var(--primary-color)] border-solid text-center text-[color:var(--primary-color)] text-xl px-[30px] py-[5px] rounded-[20px]'>Xem thêm</button></div>
      </Container>
      <Container>
       <Row className="w-75 m-auto mb-5">
        <div className='flex items-center'>
        <b></b>
      <span className="text-[28px] text-center font-semibold mx-[20px] my-0">RAU CỦ QUẢ</span>
      <b></b></div>
      
      </Row>
      </Container>
      <Container>
        <Row>
          {data && data.map(item=>
          <Col md={6} lg={4} sm={12} xl={3} key={item.id}>
            <div className="w-full border-[color:var(--primary-color)] text-2xl text-center  m-2.5 rounded-[20px] border-[1px] border-solid; p-[5px] relative">
              <div className="absolute w-10 h-10 bg-[red] text-[white] flex items-center text-sm justify-center rounded-[50%]">
                {" "}
                -10%
              </div>
              <img src={item.image} alt={item.name} className='h-[300px]  max-w-full ' />
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
            </div>
          </Col>)}
          
        </Row>
        <div className='w-full text-center my-[15px]'>
          <button className='border-[1px] border-[color:var(--primary-color)] border-solid text-center text-[color:var(--primary-color)] text-xl px-[30px] py-[5px] rounded-[20px]'>Xem thêm</button></div>
      </Container>
    </>
  );
};

export default ProductList;
