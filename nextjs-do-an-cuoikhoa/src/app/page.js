import Title from '@/component/baner-wrap/Title'
import Baner from '@/component/baner/Baner'
import React from 'react'
import './globals.css';
import Wrap from '@/component/baner-wrap/Wrap';
import ProductList from '@/component/product/ProductList';
import HotProduct from '@/component/hotProduct/HotProduct';
import Pots from '@/component/pots/Pots';
import Cart from '@/component/cart/Cart';


const page = () => {
  return (
    <div>
   <Baner  />
   <Cart />
   <Title  />
  <Wrap />
  <ProductList />
  <HotProduct />
  <Pots />
  
    </div>
  )
}

export default page