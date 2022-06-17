import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
   const [data,setData]=useState(null)

   useEffect(()=>{
      const fetchdata=async()=>{
       const respone=await fetch(url)
       const json=await respone.json()
       setData(json)
      }
      fetchdata()
   },[url])
   return {data}
}
