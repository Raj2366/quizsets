import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/login-user", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data, "UserLogin");
                if (data.status === "ok") {
                    toast.success("Login successful!");
                    navigate('/user'); // Redirect to user page
                } else {
                    toast.error(data.error || 'Login failed');
                    setError(data.error || 'Login failed');
                }
            })
            .catch((error) => {
                toast.error(error.message);
                setError(error.message);
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    return (
        <div className='login'>
            <ToastContainer />
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className='em'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='ps'>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='button'>Log In</button>
                    <p>Don't have an account?</p>
                    <Link to='/signup' className='create'>Create Account</Link>
                    <Link to='/forgotpassword' className='forgot'>Forgot Password</Link>
                    <Link to="/">Back</Link>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
