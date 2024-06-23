'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = () => {
  return (
    <>
 <Container className='wrap mb-5 mt-5'>
    <Row >
      <Col sm={12} md={4} xs={12} >
        <div className='w-full border-[color:var(--primary-color)] text-[color:var(--primary-color)] text-2xl text-center shadow-[0px_1px_var(--primary-color)] m-2.5 rounded-[10px] border-[3px] border-solid;
  font-family: "Pattaya" "sans-serif"'>
          <img className= 'mb-3' src="/images/qua-1.jpg" alt="trai cay" />
          <h1 className='wrap-title'>Rau củ tươi</h1>
          <p className='wrap-content'>Được kiểm định rõ ràng</p>
        </div>
      </Col>
      <Col sm={12} md={4} xs={12} >
        <div className='w-full border-[color:var(--primary-color)] text-[color:var(--primary-color)] text-2xl text-center shadow-[0px_1px_var(--primary-color)] m-2.5 rounded-[10px] border-[3px] border-solid;
  font-family: "Pattaya" "sans-serif"'>
          <img className= 'mb-3' src="/images/qua-2.jpg" alt="trai cay" />
          <h1 className='wrap-title'>Thực phẩm sạch</h1>
          <p className='wrap-content'>Quy trình sản suất khép kín</p>
        </div>
      </Col>
      <Col sm={12} md={4} xs={12} >
        <div className='w-full border-[color:var(--primary-color)] text-[color:var(--primary-color)] text-2xl text-center shadow-[0px_1px_var(--primary-color)] m-2.5 rounded-[10px] border-[3px] border-solid;
  font-family: "Pattaya" "sans-serif"'>
          <img className= 'mb-3' src="/images/qua-3.jpg" alt="trai cay" />
          <h1 className='wrap-title'>Trái cây tươi</h1>
          <p className='wrap-content'>Nhập khẩu & Trong nước</p>
        </div>
      </Col>
    </Row>

 </Container>

  
    </>
  )
}

export default Title