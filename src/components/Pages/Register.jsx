import React,{useState} from 'react';
import './loginregister.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleRegister = (event) =>{
   event.preventDefault()
   axios.post("http://localhost:8002/register",{username,email,password})
   .then(()=>{
    alert("Successfully Registered")
    setUsername("")
    setEmail("")
    setPassword("")
    navigate("/login")
   })
   .catch((error)=>{
    console.log("Unable to Register")
   })
  }

  return (
    <div>
       <div className="auth-page"> 
      <div className='auth-form'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
        <label htmlFor="name">Username</label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}  required/>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button className='common-btn' type='submit'>Register</button>
        </form><br/>
        <p>  Have an account?<Link  to='/login'>Login</Link></p>
      </div>
    </div>
    </div>
  )
}
