import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Categories from "../pages/Categories"
// import Products from "../pages/Products"

const Home = () => {
  return (
    <>
      <Navbar />
      <Categories />
      {/* <Products /> */}
      <Footer />
    </>
  )
}

export default Home
