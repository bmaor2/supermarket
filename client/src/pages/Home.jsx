import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SearchProduct from '../components/SearchProduct'
// import Products from "../pages/Products"
import Categories from "../pages/Categories"
// import Products from "../pages/Products"

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Products /> */}
      <Categories />
      {/* <Products /> */}
      <Footer />
    </>
  )
}

export default Home
