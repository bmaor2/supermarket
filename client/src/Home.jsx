import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from './components/category/Categories';
import Navbar from './components/navbar/Navbar';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Categories");
  }, [])


  return (
    <></>
  )
}

export default Home
