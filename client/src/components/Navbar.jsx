import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import "../css/navbar.css";
import logo from "../images/logo.png";
import SearchProduct from '../components/SearchProduct';

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.clear("userOnline");
        navigate("/login");
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <p>{JSON.parse(localStorage.getItem("userOnline")).username}</p>
                <p className="logout_span" onClick={handleClick}>Logout</p>
                <SearchProduct />
            </div>
        </div>
    )
}

export default Navbar