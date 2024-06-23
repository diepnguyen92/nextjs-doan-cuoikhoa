'use client'
import React, { useEffect, useState } from 'react'

const GetApi = (url) => {
    const [data, setData]= useState([])
    useEffect(()=>{
      const getApi = async ()=>{
        const res = await fetch(url)
        const result = await res.json()
        setData(result)
      };
      getApi()
    },[url])
  

  return  { data }
  
}

export default GetApi