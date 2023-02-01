import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from './components/category/Categories';
import Navbar from './components/navbar/Navbar';


const Home = () => {
  const navigate = useNavigate();


  // useEffect(()=>{
  //   if (localStorage.getItem("userOnline") == null) {
  //     navigate("/login")
  //   }
  // },[])


  return (
    <>
      <Navbar />
      <Categories />
    </>
  )
}

export default Home
