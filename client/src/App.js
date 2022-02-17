import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Login from './Components/Login.js';
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Detail from './Components/Detail.js';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/detail/:id" element={<Detail />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
