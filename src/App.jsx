// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Products />
            <SpeedInsights/>
          </>
        } />
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;





