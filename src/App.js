
import React from 'react';
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
          <Route path="About" element={<About />}/>
      </Routes>
    </BrowserRouter>
    
  )
   
}

export default App;
