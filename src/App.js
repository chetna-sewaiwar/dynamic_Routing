import React from 'react';
import {  Routes, Route, Link } from 'react-router-dom';

import About from './About';
import User from './User';
import Home from './Home';


function App() {
  return (
    <>    
      <Link to="/">Home</Link>        
      <Link to="/user/chetna">Chetna</Link>
      <Link to='about'>About</Link>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/user/:username" element={<User/>}>
      </Route>
        <Route path="about" element={<About/>} >
        </Route>
      </Routes>
      </>
    
  );
}

export default App;