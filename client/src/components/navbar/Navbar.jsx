import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.scss";
import SearchProduct from '../search/SearchProduct';
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
    const [username, setUsername] = useState("");
    const [cartAmount, setCartAmount] = useState(JSON.parse(localStorage.getItem("userOnline"))?.cart?.length)
    const [renderCartList, setRenderCartList] = useState(false);
    const navigate = useNavigate();


    const handleClick = (e) => {
        let { id } = e.target
        switch (id) {
            case "login":
                navigate("/login")
                break;
            case "logout":
                localStorage.clear();
                document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                navigate("/")
                window.location.reload();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setCartAmount(prev => prev = JSON.parse(localStorage.getItem("userOnline"))?.cart?.length);
        setRenderCartList(!renderCartList);
    }, [JSON.parse(localStorage.getItem("userOnline"))?.cart?.length])

    useEffect(() => {
        setUsername(JSON.parse(localStorage.getItem("userOnline"))?.username);
    }, [])

    return (
        <>
            <div className="navbar">
                <div className="logo"><img src={`http://localhost:8000/navbar/img?imgUrl=/home/hilma/study/Class_projects/supermarket/server/images/navbar/logo.png`} alt="logo" /></div>
                <div className="links">
                    <p className={username ? "w3-button w3-white w3-border w3-border-red w3-round-large w3-wide w3-large w3-hover-blue" : ""}>{username}</p>
                    <p className="w3-button w3-white w3-border w3-border-red w3-round-large w3-wide w3-large w3-hover-blue" id={!username == "" ? "logout" : "login"} onClick={handleClick}>{!username == "" ? "Logout" : "Login"}</p>
                    <SearchProduct />
                </div>
            </div>
            <Cart />
        </>
    )
}

export default Navbar

// `http://localhost:8000/product/img?imgUrl=${product.img_url}`