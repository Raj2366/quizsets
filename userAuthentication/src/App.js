import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './UserAuthentication/Login'
import Signup from './UserAuthentication/Signup'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
