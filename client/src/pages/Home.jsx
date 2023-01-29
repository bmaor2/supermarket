import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from "../pages/Products"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
