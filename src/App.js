import react from 'react';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Navbar from './components/Navbar';


export default function App () {
  return (
    <>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
 }
 