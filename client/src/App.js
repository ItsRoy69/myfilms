import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login.js';
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Detail from './Components/Detail.js';

const App = () => {
    return (
      <div className='App' >
        <Navbar />
        <Routes>
            <Route exact path="/" element={ <Login/>} ></Route>
            <Route exact path="/home" element={ <Home/>} ></Route>
            <Route exact path="/detail/:id" element={ <Detail/>} ></Route>
        </Routes>
        <Footer />
      </div>
    )
}

export default App
