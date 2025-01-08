
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Details } from './pages/home/details/details';
import Navbar from './pages/home/navbar/navbar';

export const Rout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};
