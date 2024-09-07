import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import Forgot from './component/Forgot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/forgot" element={<Forgot/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
