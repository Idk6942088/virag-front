import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	const navigate=useNavigate()
  return (
    <div id="nyito">
		  <Header/>
		<main onClick={()=>navigate('/products')}>        
			<a href="#">Válasszon vetőmagjainkból!</a>
		</main>
		<Footer/>
	</div>
  )
}

