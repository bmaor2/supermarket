import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import description_img from "../images/description_img.jpg"
import "./categories.scss";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/category");
        setCategories(res.data);
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
    navigate(`/categories/${id}`)
  }

  return (
    <>
      <div className="main_container">
        <div className="category_container">
          {categories.map((category) => (
            <div key={Math.random()} className="category">
              <img onClick={() => categoryClick(category.category_id)} src={`http://localhost:8000/category/img?imgUrl=${category.img_url}`} alt="" />
              <h2>{category.category_name}</h2>
            </div>
          ))}

        </div>
        <img src={`http://localhost:8000/category/img?imgUrl=/home/hilma/study/Class_projects/supermarket/server/images/default/banner.jpeg`}  alt="" />
        <button className="addHome">
          <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
            Add new product
          </Link>
        </button>
      </div>
    </>
  );
};

export default Categories;