import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
//import './App.css';
import Greet from "./components/zuri.js"
import Contact from "./components/contact.js"

function App () {
    return (
      <Router>
        <Routes>
          <Route path="/" element = {<Greet />} /> 
          <Route path ="/contact" element = {<Contact />} />
        </Routes>
      </Router>
      
    );
}

export default App;
