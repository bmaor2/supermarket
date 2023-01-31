import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Updateproduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    category: "",
    price: "",
    img_url: "",
    description: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const productId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8000/product/${productId}`, product);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

    console.log(product)
  return (
    <div className="form">
      <h1>Update the product</h1>
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
        name="category"
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
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all products</Link>
    </div>
  );
};

export default Updateproduct;