import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SearchProduct from '../components/SearchProduct'
import Products from "../pages/Products"

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchProduct />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
