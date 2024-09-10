import React from "react";
import "./Asset/Signup.css"
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="container">
            <form>
                <h2>SIGNUP</h2>

                <label >USER NAME :
                <input type="text"></input>
                </label>
                <label>PHONE NUMBER :
                <input type="number"></input>
                </label>
                <label>PASSWORD :
                <input type="password"></input>
                </label>
                <label>EMAIL :
                <input type="email"></input>
                </label>

                <button type="sumbit">SIGN UP</button>
               <div className="link">
               <p>Already have an account ?</p>
               <Link id="log" to="/form"> LOGIN</Link>
               </div>
               
            </form>
        </div>
    )
}

export default Signup;
