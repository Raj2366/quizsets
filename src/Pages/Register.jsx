import React from 'react';
import './loginregister.css';
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <div>
       <div className="auth-page"> 
      <div className='auth-form'>
        <h2>Register</h2>
        <form>
        <label htmlFor='fname'>FirstName</label>
        <input type='text' placeholder='FirstName' required/>
        <label htmlFor='lname'>LastName</label>
        <input type='text' placeholder='LastName' required/>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email' required/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password' required/>
            <button className='common-btn'>Register</button>
        </form>
        <p>  Have an account?<Link  to='/login'>Login</Link></p>
      </div>
    </div>
    </div>
  )
}
