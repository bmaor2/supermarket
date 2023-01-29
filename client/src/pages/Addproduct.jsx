import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    category_id: "",
    price: "",
    img_url: "",
    description: "",
  });
  const [error, setError] = useState(false)


  const navigate = useNavigate()

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(product.category);
      await axios.post("http://localhost:8000/product", product)
      navigate("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  };

  console.log(product)
  return (
    <div className="form">
      <h1>Add New Product</h1>
      <input
        type="text"
        placeholder="The name of the product..."
        name="product_name"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="product's description "
        name="description"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="product category"
        name="category_id"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="product price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="img url"
        name="img_url"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all products</Link>
    </div>
  );
};

export default Addproduct
