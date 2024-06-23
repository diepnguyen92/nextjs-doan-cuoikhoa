
import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <div className='bg-banerFt w-full h-[300px] pt-5'>
    <Container>
        <Row className='text-[white]'>
        <Col md={6} lg={4} sm={12} xl={3} >
            <div>
                <img src="/images/logo4.png" alt="logo" />
            </div>
            <div>Chuyên cung cấp các loại hoa quả nhập khẩu, nội địa và các loại thực phẩm từ thiên nhiên.</div>
            </Col>  
            <Col md={6} lg={4} sm={12} xl={3} >
            <div>
                <h4>Về chúng tôi</h4>
            </div>
            <ul>
                <li>Giới thiệu</li>
                <li>Lĩnh vực hoạt động</li>
                <li>Triết lí kinh doanh</li>
                <li>Chính sách chất lượng</li>
            </ul>
            </Col>  
            <Col md={6} lg={4} sm={12} xl={3} >
            <div>
                <h4>Hỗ trợ khách hàng</h4>
            </div>
            <ul>
                <li>Chính sách hỗ trợ</li>
                <li>Cam kết</li>
                <li>Chính sách giao hàng và thanh toán</li>
                <li>Câu hỏi thường gặp</li>
            </ul>
            </Col> 
            <Col md={6} lg={4} sm={12} xl={3} >
            <div>
                <h4>Liên hệ</h4>
            </div>
            <ul>
                <li>Địa chỉ:338, Vân Phú, Việt Trì, Phú Thọ</li>
                <li>Email: nguyendiep.kttm@gmail.com</li>
                <li>Số điện thoại: 0988333555</li>
                
            </ul>
            </Col> 




        </Row>
    </Container>

    </div>
    <div className='bg-[#669933] w-full h-[50px] flex'>

    </div>
    </>
  )
}

export default Footer