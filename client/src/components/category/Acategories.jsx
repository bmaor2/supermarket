import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../functions/getCookie";
import axios from "axios";
import "./categories.scss";
import Navbar from "../navbar/Navbar";

const Acategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let type;
    let typeOfUser = getCookie('user').split(":")[1];
    if(typeOfUser !== undefined){
      type = window.atob(typeOfUser);
    }
    if (type === "customer" || !type) {
      navigate("/Categories");
    }
    else if (type === "admin") {
      navigate("/Acategories");
    }


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
    navigate(`/categories/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="main_container">
        <div className="category_container">
          {categories.map((category) => (
            <div key={Math.random()} className="category">
              <img onClick={() => categoryClick(category.category_id)} src={`http://localhost:8000/category/img?imgUrl=${category.img_url}`} alt={category.category_name} />
              <h2>{category.category_name}</h2>
            </div>
          ))}

        </div>
        <img src={`http://localhost:8000/category/img?imgUrl=/home/hilma/study/Class_projects/supermarket/server/images/default/banner.jpeg`}  alt="banner" />
        <button className="addHome">
          <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
            Add new product
          </Link>
        </button>
      </div>
    </>
  );
};

export default Acategories;