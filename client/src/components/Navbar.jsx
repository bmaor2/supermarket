import React from "react";
import { Link } from 'react-router-dom'
import "../css/navbar.css";
import logo from "../images/logo.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <Link className="link" to="/?cat">
                    <h6> catagory1 </h6>
                </Link>
                <Link className="link" to="/?cat">
                    <h6> catagory2 </h6>
                </Link>
                <Link className="link" to="/?cat">
                    <h6> catagory3 </h6>
                </Link>
                <Link className="link" to="/?cat">
                    <h6> catagory4 </h6>
                </Link>
                <Link className="link" to="/?cat">
                    <h6> catagory5 </h6>
                </Link>
                <span>username</span>
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Navbar