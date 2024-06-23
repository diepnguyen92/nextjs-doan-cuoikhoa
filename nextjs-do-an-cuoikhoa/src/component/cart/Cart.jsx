'use client'

import React, { useState } from 'react'

const Cart = ({cartOpen, handleCloseCart, tongleClick}) => {



  return (
    <>
       <div className={`cart-modal-overlay ${cartOpen ? "open" : ""}`} onClick={handleCloseCart}>
        <div className="cart-modal">
          <div className="cart-wraper">
            <div className="cart-tittle">Giỏ hàng</div>
            <div className="cart-count">0</div>
          </div>
          <i id="close-btn" className="fas fa-times" onClick={tongleClick} />
          <h1 className="cart-is-empty">chưa có sản phẩm nào</h1>
          {/*thêm sp ở đây*/}
          <div className="total">
            <div className="cart-total-price">
              <div className="cart-total">TỔNG TIỀN</div>
              <span className="total-price">0 VND</span>
            </div>
            
              <button className="purchase-btn">Thanh toán</button>
          
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Cart