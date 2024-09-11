import React from 'react';
import './loginregister.css';
import {Link} from 'react-router-dom';

export default function login() {
  return (
    <div className="auth-page"> 
      <div className='auth-form'>
        <h2>Login</h2>
        <form>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email' required/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password'  required/>
            <button className='common-btn'>Login</button>
        </form>
        <p> Don't have an account?<Link  to='/register'>register</Link></p>
      </div>
    </div>
  )
}
