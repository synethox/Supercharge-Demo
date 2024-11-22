import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUS from './components/AboutUS';
import Footer from './components/Footer';
import SolarPanels from './pages/SolarPanels';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <AboutUS />
            </>
          } />
          <Route path="/solar-panels" element={<SolarPanels />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;