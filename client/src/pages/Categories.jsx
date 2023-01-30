import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import description_img from "../images/description_img.jpg"
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

  return (
    <>
      <div className="main_container">
        <div className="category_container">
          {categories.map((category) => (
            <div key={Math.random()} className="category">
              <h2>{category.category_name}</h2>
              <img src={category.img_url} alt="" />
            </div>
          ))}

        </div>
        <img src="https://tpc.googlesyndication.com/simgad/10022496952409744435" alt="" />
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



//<button className="update">
{/* <Link
to={`/update/${product.product_id}`}
style={{ color: "inherit", textDecoration: "none" }}
>
Update
</Link>
</button> */}