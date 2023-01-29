import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState([]);

    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        e.preventDefault();

    };

    const handleClick = async (e) => {
        e.preventDefualt();
        try {
            await axios.post(`http://localhost:8800/users/{username}`)
        } catch (err) {
            alert("User not found")
            console.log(err)
            setError(true)
        }
    };

    console.log(user)
    return (
        <div className="Login">
            <h1>Login page </h1>
            <form>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleSubmit}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleSubmit}
                />
                <button onClick={handleClick}>Login</button>
                {error && "somthing went Wrong!" && <p>{error}</p>}
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login