import React from "react"
import { useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the home</h1>

            <h1 style={{textAlign:'center'}}><Link to="/signup">Logout</Link></h1>

        </div>
    )
}

export default Home