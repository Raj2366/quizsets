import React,{useState} from 'react';
import './loginregister.css';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async(event)=>{
   event.preventDefault();
   try {
    const response = await axios.post("http://localhost:8002/login",{email,password})
    const token = response.data.token;
  alert("Login Successfully");
    setEmail("");
    setPassword("");
    navigate("/");
    // window.location.reload();
    localStorage.setItem("token",token);
   } catch (error) {
    console.log("Login Error");
   }

}

  return (
    
    <div className="auth-page"> 
      <div className='auth-form'>
      <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button className='common-btn'>Login</button>
        </form><br/>
        <p> Don't have an account?<Link  to='/register'>register</Link></p>
      </div>
    </div>
  )
}
