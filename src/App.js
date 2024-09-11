<<<<<<< Updated upstream
import react from 'react';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Navbar from './components/Navbar';
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
>>>>>>> Stashed changes


export default function App () {
  return (
<<<<<<< Updated upstream
    <>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      </>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
 }
 