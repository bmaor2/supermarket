import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css";
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
                <div className="logo"><img src={`http://localhost:8000/navbar/img?imgUrl=/home/hilma/study/Class_projects/supermarket/server/images/navbar/logo.png`} alt="" /></div>
                <div className="links">
                    <div className={cartAmount > 0 ? "cart_container active_cart" : "cart_container"}>
                        <p className="cart_amount">{cartAmount > 0 ? cartAmount : ""}</p>
                        <img className="cart_logo" src={`http://localhost:8000/navbar/img?imgUrl=/home/hilma/study/Class_projects/supermarket/server/images/navbar/cart-icon.png`} alt="cart" />
                    </div>
                    <p>{username}</p>
                    <p className="logout_span" id={!username == "" ? "logout" : "login"} onClick={handleClick}>{!username == "" ? "Logout" : "Login"}</p>
                    <SearchProduct />
                </div>
            </div>
            <Cart />
        </>
    )
}

export default Navbar

// `http://localhost:8000/product/img?imgUrl=${product.img_url}`