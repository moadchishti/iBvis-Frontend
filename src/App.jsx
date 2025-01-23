// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage.jsx';
// import AboutPage from './pages/AboutPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx/'; // Import Navbar component
import ParticlesComponent from './components/ParticlesComponent/ParticlesComponent.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* <header>
          <Navbar /> 
        </header> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        {/* <footer style={footerStyle}>
          <p>© 2025 AI Surveillance Solutions. All rights reserved.</p>
        </footer> */}
      </div>
    </Router>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#f1f1f1',
  marginTop: '2rem',
};

export default App;
