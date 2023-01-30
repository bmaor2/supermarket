import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/login.css";



function HomePage() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();


    //     const handleChange = e=>{
    //  how to make it be handleChange${e.taget.type}?
    //     }

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        switch (name) {
            case 'password':
                setPassword(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            default:
                break;
        }
    };


    const logInCheck = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        let data = await response.json();
        console.log(data.message);
        if (data.isOK) {
            const respone = await fetch(`http://localhost:8000/users?user=${username}`)
            data = await respone.json();
            localStorage.setItem('userOnline', JSON.stringify({ username: username, user_id: data.user_id }));
            navigate("/")
        } else {
            navigate('/login')
            alert(data.message)
        }
    }


    const register = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
                firstName: firstName,
                lastName: lastName
            })
        });
        let data = await response.json();
        console.log(data)
        if (data.isOK) {
            window.location.reload()
            return;
        } else {
            alert(data.message)
            navigate('/login')
        }
    }
    // const getUserId = async () => {

    // }



    return (
        <div className='container'>
            <form className='signUp'>
                <h3>Register</h3>
                <input onChange={handleChange} type="text" name='firstName' value={firstName} required placeholder="First Name:" />
                <br />
                <input onChange={handleChange} type="text" name='lastName' value={lastName} required placeholder="Last Name:" />
                <br />
                <input onChange={handleChange} type="text" name='username' value={username} required placeholder="User Name:" />
                <br />
                <input onChange={handleChange} type="password" name='password' value={password} required placeholder="Password:" />
                <br />
                <input onChange={handleChange} type="email" name='email' value={email} required placeholder="Email:" />
                <br />
                <input onChange={handleChange} type="text" name='phoneNumber' value={phoneNumber} required placeholder="Phone Number:" />
                <br />
                <button className="form-btn sx log-in" onClick={() => {
                    document.getElementsByClassName("signIn")[0].className = "signIn active-sx";
                    document.getElementsByClassName("signUp")[0].className = "signUp inactive-dx";
                }} type="button">Log In</button>
                <button className='form-btn dx' onClick={register}> Register </button>
            </form>
            <form className='signIn active-dx'>
                <h3>Log In</h3>
                <input className='w100' name='username' onChange={handleChange} type="text" value={username.value} placeholder="User Name:" />
                <br />
                <input className='w100'name='password' onChange={handleChange} type="password" value={password.value} placeholder="Password:" />
                <br />
                <button className="form-btn sx back" onClick={() => {
                    document.getElementsByClassName("signUp")[0].className = "signUp active-dx";
                    document.getElementsByClassName("signIn")[0].className = "signIn inactive-sx";
                }} type="button">Register</button>
                <button className='form-btn dx' onClick={logInCheck}> Log-in </button>
            </form>


        </div>
    )
}

export default HomePage;
