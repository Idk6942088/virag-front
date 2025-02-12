import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from 'react'
import { getSingleProduct, updateProduct } from './utils'
import { useEffect } from 'react'
const url="http://localhost:8000/api/flowers/"

export const Order = () => {
  const {id}=useParams()
  const [products,setProduct]=useState(null)
  const [db,setDb]=useState(0)
  const [msg,setMsg]=useState(null)


  const navigate = useNavigate()


  useEffect(()=>{
    getSingleProduct(url+id,setProduct)
  },[])

  useEffect(()=>{
    if(products && products.keszlet>0) setDb(1)
  },[products])

  useEffect(()=>{
    if(msg){
      alert(msg?.msg)
      navigate('/products')
    }
  },[msg])

  products && console.log(products)


  const handleOrder=(e)=>{
    e.preventDefault()
    if(products.keszlet<db){
      alert('Nincs elég mennyiség raktáron!')
      navigate('/products')
    }else{
      const updatedProduct={...products,keszlet:products.keszlet-db}
      updateProduct(url+products.id,updatedProduct,setMsg)
    }
  }



  return (
    <div>
      <Header/>
        {products && <main className='container'>
            <h2>{products.nev}</h2>
            <div className="row">
              <div className="col-md-6">
                <img src={products.kepUrl} alt={products.nev} className='img-thumbnail' />
              </div>
              <div className="col-md-6">
                <p>{products.leiras}</p>
                {products.keszlet>0 ?
                <form>
                  <p className="text-center"><span id='ar'>Ár:{products.ar}</span>
                    <label for="mennyiseg">Mennyiseg:</label>
                    <input type="number" name='mennyiseg' id='mennyiseg' min="1" max={products.keszlet} value={db} 
                      onChange={(e)=>setDb(e.target.value)}
                    />  
                  </p>
                  <p className='text-center'><button className='btn btn-warning btn-lg' onClick={handleOrder}>Megrendelem</button></p>
                </form>
                :
                <p>Jelenleg nincs a termékből készleten!</p>
                }
              </div>
            </div>
        </main>

}
      <Footer/>
    </div>
  )
}

