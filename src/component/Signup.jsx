import React from "react";
import "./Signup.css"
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="container">
            <form>
                <h2>CREATE NEW ACCOUNT</h2>

                <label >USER NAME :
                <input type="text"></input>
                </label>
                <label>PHONE NUMBER :
                <input type="number"></input>
                </label>
                <label>OTP :
                <input type="number"></input>
                </label>

                <button type="sumbit">SIGN UP</button>
                <p>Already have an account ?</p>
                <Link to="/form"> LOGIN</Link>
            </form>
        </div>
    )
}

export default Signup;
