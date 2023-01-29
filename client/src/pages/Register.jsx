import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        mobile: "",
        password: "",
    });
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const hanleChange = async (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        e.preventDefault();

    };

    const handleClick = async (e) => {
        e.preventDefualt();
        try {
            await axios.post(`http://localhost:8020/users/}`, user)
            navigate("/login")
        } catch (err) {
            alert("User not found")
            console.log(err)
            setError(true)
        }
    };

    console.log(user)
    return (
        <div className="form">
            <h1>Register page </h1>
            <form>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={hanleChange}
                />
                <input
                    type="text"
                    placeholder="firstname"
                    name="firstname"
                    onChange={hanleChange}
                />
                <input
                    type="text"
                    placeholder="lastname"
                    name="lastname"
                    onChange={hanleChange}
                />
                <input
                    type="number"
                    placeholder="mobile"
                    name="mobile"
                    onChange={hanleChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={hanleChange}
                />
                <button onClick={handleClick}>Register</button>
                {error && "somthing went Wrong!" && <p>{error}</p>}
                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register