import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SearchApp from '../components/searchapp'
import Products from "../pages/Products"

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchApp />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
