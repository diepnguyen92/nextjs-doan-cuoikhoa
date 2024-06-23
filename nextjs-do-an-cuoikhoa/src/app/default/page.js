import ProductDetail from '@/component/pages/ProductDetail'
import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const Default = () => {
  return (
    <>
    <div className='w-full mb-5'>
        <Image src="/images/banner.jpg" alt='baner' width={3000} height={300} />
        </div>
    <ProductDetail />
    </>
  )
}

export default Default