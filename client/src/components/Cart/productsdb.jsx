// import React from 'react';
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Main = (props) => {
//   const [products, setproducts] = useState([]);

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/product");
//         setproducts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProducts();
//   }, []);
// }

// export const PRODUCTS = [
//     {
//       {product.product_name},
//       price: {product.price},
//       productImage: {product.img_url},
//     }
// ]