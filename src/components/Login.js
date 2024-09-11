import React, { useState ,useEffect} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../App.css"


function Login() {
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

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
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

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <p>Don't have an account ?</p> <Link to="/signup">Sign Up</Link>

      </div>
      </div>
    )
}

export default Login