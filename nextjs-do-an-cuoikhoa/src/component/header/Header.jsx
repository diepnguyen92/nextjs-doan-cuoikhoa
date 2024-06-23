'use client'
import React, { useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Cart from "../cart/Cart";
config.autoAddCss = false;

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const tongleClick = () => {
    setCartOpen(!cartOpen);
  };
  const handleCloseCart = (e)=>{
    if(e.target.classList.contains('cart-modal-overlay'))
    {return setCartOpen(false)}
  }

  return (
    <>
      <div className="wraper">
        <div className="header-top">
          <div className="container">
            <div className="text-wiper">Chuyên cung cấp thực phẩm sạch</div>
            <div className="acount-shop">
              <ul>
                <li className="acount"> Tài khoản</li>
                <li>Thanh toán</li>
                <li>cửa hàng</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-menu">
            <div className="container">
          <div className="logo">
            <Image src='/images/logo4.png' alt="logo"
            width={160}
            height={150}
            />
          </div>
          <div className="searcher">
            <input type="text" placeholder="Tìm kiêm" />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
          <div className="menu w-full">
            <ul>
                <li>Trang chủ</li>
                <li>Sản phẩm</li>
                <li>Giới thiệu</li>
                <li>Tin tức</li>
                <li>Liên hệ</li>
                <li className="ml-[15px]" onClick={tongleClick}> 
                <FontAwesomeIcon className="text-2xl mr-[8px]" icon={faCartShopping} />
                Giỏ hàng
                </li>
            </ul>
            
          </div>
        </div></div>
      </div>
      <Cart cartOpen={cartOpen} handleCloseCart={handleCloseCart} tongleClick={tongleClick}/>
    </>
  );
};

export default Header;
