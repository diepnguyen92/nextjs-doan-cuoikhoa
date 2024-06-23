"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Wrap = () => {
  return (
    <>
      <div className="bg-promotion bg-cover bg-center w-full h-[300px]">
        <Container className="pt-5">
          <h1 className="text-[28px] text-white text-center font-semibold">CAM KẾT CHẤT LƯỢNG</h1>
          <Row className="w-75 m-auto text-white text-[20px] mt-4">
          <Col sm={6} md={4} xs={12} >
            <ul>
                <li>Hoa qủa tươi sạch</li>
                <li>Không thuốc biến đổi gen</li>
            </ul>
          </Col>
          <Col sm={6} md={4} xs={12} >
            <ul>
                <li>Không chất bảo quản</li>
                <li>Không hàng Trung Quốc</li>
            </ul>
          </Col>
          <Col sm={6} md={4} xs={12} >
            <ul>
                <li>Dịch vụ chuyên nghiệp</li>
                <li>Giá cả cạnh tranh</li>
            </ul>
          </Col>

          </Row>
         
        </Container>
      </div>
      <Container>
       <Row className="w-75 m-auto mb-5">
      <h1 className="text-[28px] text-center font-semibold">SẢN PHẨM KHUYẾN MẠI</h1>
      <p className="text-[16px] text-center">Với mong muốn mang tới cho khách hàng sự thuận tiện nhất và dẫn thay đổi thói quen đi chợ truyền thống cũng như đa số khách hàng đều được sử dụng các sản phẩm hoa quả sạch chất lượng cao nhất.</p>
      </Row>
      </Container>
    </>
  );
};

export default Wrap;
