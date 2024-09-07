import React from "react";
import "./Forgot.css";

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
            
        </form>
        </div>
    )

}
export default Forgot