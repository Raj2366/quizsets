// form arnav side team "A" BCA 3rd year

import React from "react";
import { Link } from 'react-router-dom';
import './Asset/form.css'

function Form() {
    return (
        <div className="container">
            <form>
                <h2>LOGIN</h2>
                
                <label htmlFor="email">Enter your e-mail:
                    <input type="email" id="email" />
                </label>
                
                <label htmlFor="password">Enter your password:
                    <input type="password" id="password" />
                </label>
                
                <button type="submit">LOGIN</button>
                <br></br>
                
                <Link to='/forgot' >FORGET PASSWORD</Link>
                <Link to='/signup'>SIGN UP</Link>

               
            </form>
        </div>
    );
}

export default Form;
