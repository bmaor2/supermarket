import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">logo</div>
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
        </div>
    )
}

export default Navbar