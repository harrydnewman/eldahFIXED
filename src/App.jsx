import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './pages/Home';
import About from "./pages/About"; // Importing About component

export default function App() {
  return (
    <Router>
      <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}
