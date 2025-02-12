import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from './utils'
import { useNavigate } from 'react-router-dom'
const url="http://localhost:8000/api/flowers"

export const Products = () => {
  const [products,setproducts]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    getProducts(url,setproducts)
  },[])

  products && console.log(products)
  return (
    <div>
      <Header/>
        <div className="row">
          <h2>Vetőmagjaink:</h2>
          {products && products.map(obj=>
            <div key={obj.id} className='col-lg-4 mt-4 arukep'>
            <h4>{obj.nev}</h4>
            <a onClick={()=>navigate('/order/'+obj.id)}> <img src={obj.kepUrl} alt={obj.nev}   className='img-fluid' /></a>
            </div>
          )}
        </div>
      <Footer/>
    </div>
  )
}


