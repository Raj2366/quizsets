import React from 'react'
import { Link } from 'react-router-dom';


function Navbar(){
return(
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand text-dark fw-bold" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-dark fw-bold" to="/">Home</Link>
        </li>
        
       
      </ul>
      <form className="d-flex">
        <input className="form-control nav-link active  me-2 fw-bold btn-dark" type="search" placeholder="Search" aria-label="Search"/>
       <button >
          <Link className="form-control  btn-success text-decoration-none fw-bold" to="/login">Login</Link>
        </button>
     
      </form>
    </div>
  </div>
</nav>

</>
);


}
export default Navbar;