import React, { useState ,useEffect} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../App.css"


function Signup() {
    useEffect(() => {
        const createSprinkles = () => {
          const container = document.body;
          for (let i = 0; i < 100; i++) {
            const sprinkle = document.createElement('div');
            sprinkle.classList.add('sprinkle');
            sprinkle.style.left = `${Math.random() * 100}vw`;
            sprinkle.style.top = `${Math.random() * 100}vh`;
            container.appendChild(sprinkle);
          }
        };
    
        createSprinkles();
      }, []);
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


  return (
    <div className="logo-box">
        <div className="login">
        
            <h1>Signup</h1>

        <form action="POST">
    
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
            <input type="submit" onClick={submit} />
        

            </form>

            <br />
            <p>OR</p>
            <br />

            <p>Already have an account ?</p><Link to="/">Login</Link>

      </div>
      </div>
    )
}

export default Signup