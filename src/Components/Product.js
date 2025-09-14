import React from 'react'
import {useEffect,useState} from 'react'



const Product = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(result=>setProducts(result))
},[])
  return (
    <div>
      Product Component
      {JSON.stringify(products)}
    </div>
  )
}

export default Product
