"use client";

import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
const Pots = () => {
  return (
    <>
      <Container className="mb-5">
        <Row className="w-75 m-auto mb-5">
          <div className="flex items-center">
            <b></b>
            <span className="text-[28px] text-center font-semibold mx-[20px] my-0">
              CÓ THỂ BẠN CẦN
            </span>
            <b></b>
          </div>
        </Row>
        <div className="Pots-contact flex">
          <div className="pots">
            <div className="pot flex">
              <img src="/images/qua-1.jpg" alt="" />
              <div className="content">
                <h5 className="text-[color:var(--primary-color)]">
                  Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                </h5>
                <p>
                  Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất
                  nhiều gia đình trong thành phố bởi phương pháp trồng rau đơn
                  giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                  trồng cũng cần...
                </p>
              </div>
            </div>
            <div className="pot flex">
              <img src="/images/qua-1.jpg" alt="" />
              <div className="content">
                <h5 className="text-[color:var(--primary-color)]">
                  Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                </h5>
                <p>
                  Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất
                  nhiều gia đình trong thành phố bởi phương pháp trồng rau đơn
                  giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                  trồng cũng cần...
                </p>
              </div>
            </div>
            <div className="pot flex">
              <img src="/images/qua-1.jpg" alt="" />
              <div className="content">
                <h5 className="text-[color:var(--primary-color)]">
                  Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                </h5>
                <p>
                  Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất
                  nhiều gia đình trong thành phố bởi phương pháp trồng rau đơn
                  giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                  trồng cũng cần...
                </p>
              </div>
            </div>
            <div className="pot flex">
              <img src="/images/qua-1.jpg" alt="" />
              <div className="content">
                <h5 className="text-[color:var(--primary-color)]">
                  Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                </h5>
                <p>
                  Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất
                  nhiều gia đình trong thành phố bởi phương pháp trồng rau đơn
                  giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                  trồng cũng cần...
                </p>
              </div>
            </div>
          </div>
          <div className="contact">
            <Form className="border-[1px] border-[color:var(--primary-color)] border-solid rounded-[20px] p-2.5 text-center mb-2">
              <Form.Group
                className="mb-3  "
                controlId="exampleForm.ControlInput1"
              >
                <h4 className="text-center">Liên hệ mua hàng</h4>

                <Form.Control type="text" placeholder="Họ và tên (*)" />
                
              </Form.Group>
              <Form.Group
                className="mb-3  "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Số điện thoại (*)" />
              </Form.Group>


              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
               
                <Form.Control as="textarea" rows={5} placeholder="Nội dung..." />
              </Form.Group>
              <Button variant="success" >Gửi đi</Button>{' '}
            </Form>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/a_0AgvcCQ20?si=-M3373KJoCVtIsL5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-[10px]"></iframe>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pots;
