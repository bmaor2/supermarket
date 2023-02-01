import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Product } from "../components/Cart/Product";
// import description_img from "../images/description_img.jpg"
import "../css/categories.scss";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem("userOnline")) {
      navigate("/login")
    }

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

  const categoryClick = (id) => {
    navigate(`/categories/${id}`, {state: <Product category_id={id} />})
  }

  return (
    <>
      <div className="main_container">
        <div className="category_container">
          {categories.map((category) => (
            <div key={Math.random()} className="category">
              <img onClick={()=>categoryClick(category.category_id)} src={category.img_url} alt="" />
              <h2>{category.category_name}</h2>
            </div>
          ))}

        </div>
        <img src="https://tpc.googlesyndication.com/simgad/10022496952409744435" alt="" />
        <button onClick={()=>navigate("/add")} className="addHome">
          Add Product
        </button>
      </div>
    </>
  );
};

export default Categories;