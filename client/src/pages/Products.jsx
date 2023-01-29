import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/product/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Our Supermarket products</h1>
      <div className="Products">
        {product.map((product) => (
          <div key={product.product_id} className="product">
            <img src={product.img_url} alt="" />
            <h2>{product.product_name}</h2>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button className="delete" onClick={() => handleDelete(product.product_id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${product.product_id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new product
        </Link>
      </button>
    </div>
  );
};

export default Products;

