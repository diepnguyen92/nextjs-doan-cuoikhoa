'use client'
import { URL_API } from '@/app/api/urlApi'
import GetApi from '@/app/hooks/GetApi'
import Image from 'next/image'
import React, { useState } from 'react'
import { Container,Row, Col } from 'react-bootstrap'


const ProductDetail = () => {
const {data} = GetApi(URL_API)
    const [quantity, setQuantity] = useState(1);
const handelClickUp = ()=> {
    setQuantity(quantity +1)}
const handleClickDown = ()=>{
    if (quantity > 1) {
        setQuantity(quantity - 1);
      }
}   
  return (
    <>
  <Container>
    <div className="d-flex mb-5  m-auto">
    <div className="image mr-5 border-[1px] border-solid">
        <Image src='https://traicaytonyteo.com/uploads/source/anh-web-ngoc/quyt-uc-ahp.jpg' alt='anh' 
        width={600}
        height={600}
        />

    </div>
    <div className="content">
        <h1 className='text-2xl font-bold mb-2.5;'>Tên sản phẩm : </h1>
        <div className='price d-flex'>
        <div className="font-bold text-red-500 mr-5">180000 đ</div>
                  <div className="opacity-70 line-through">200000 đ</div>
        </div>
        <div className='content-chil'>Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt giúp duy trì sức…</div>
        <div className='button-add'>
       <button className='total' onClick={handleClickDown}> - </button>
       <input type="text"  value={quantity}   className='number'/>
       <button className='total' onClick={handelClickUp}>+</button>
       <button className=" h-[50px]text-base bg-[#669933] text-[white] px-[15px] py-[10px] rounded-[10px] mb-2 mt-2 ml-5">Thêm vào giỏ hàng</button>
        </div>
        <div >Danh mục : </div>
   
    </div></div>
    <div className='describe text-2xl font-bold '>
        Mô tả:
        <div className='w-full h-[500px] border-[1px] border-solid mb-5'  ></div>
        
    </div>
    <div className='font-bold text-2xl text-center mb-5'>Sản Phẩm liên quan </div>
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

  </Container>

    
    </>
  )
}

export default ProductDetail