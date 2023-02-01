import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const Product = (props) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/product");
        setproducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <h1>{useLocation()}</h1>
  );
}