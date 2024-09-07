import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import Forgot from './component/Forgot';
import Signup from './component/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
