import React from "react";
import './Asset/Forgot.css'
import { Link } from "react-router-dom";

function Forgot(){
    return(
        <div className="container">
        <form>
            <h2>FORGET YOUR PASSWORD</h2>
            <label>USER NAME :
            <input type="text"></input>
            </label>
            <label>PHONE NUMBER :
            <input type="number"></input>
            </label>
            <label>OTP :
            <input type="number"></input>
            </label>

            <button type="submit">SUBMIT</button>
            
            <Link to="/form"> GOBACK</Link>
        </form>
        </div>
    )

}
export default Forgot;