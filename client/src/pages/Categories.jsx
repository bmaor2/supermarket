import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/category");
        setCategories(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCategories();
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/product/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Our Supermarket products</h1>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={Math.random()} className="category">
            <h2>{category.category_name}</h2>
            <img src={category.img_url} alt="" />
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new product
        </Link>
      </button>
    </>
  );
};

export default Categories;



//<button className="update">
{/* <Link
to={`/update/${product.product_id}`}
style={{ color: "inherit", textDecoration: "none" }}
>
Update
</Link>
</button> */}