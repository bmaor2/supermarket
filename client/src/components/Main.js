import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = (props) => {
  const [product, setproducts] = useState([]);

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
    <main>
      <h2>Products</h2>
      <img className='' src={product.product_url} alt={product.description}></img>
      <h3>{ }</h3>
      <div><span>${ }</span></div>
      <div>
        {/* <button>Add to Chart</button> */}
      </div>
    </main>
  )
}

export default Main
