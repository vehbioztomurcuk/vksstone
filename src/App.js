// src/App.js
// Add this line at the top of your App.js file
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MyImageGallery from './MyImageGallery';
import ContactPage from './ContactPage';
import Header from './Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FactoryGallery from './FactoryGallery'; // Import FactoryGallery
import ProjectsGallery from './ProjectsGallery'; // Import ProjectsGallery
import CompaniesPage from './CompaniesPage';

// ... other imports

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/gallery" element={<ProjectsGallery />} />
        <Route path="/gallery/:product" element={<MyImageGallery />} />
        <Route path="/factory/gallery" element={<FactoryGallery />} /> // Use the imported FactoryGallery
        <Route path="/projects/gallery" element={<ProjectsGallery />} /> // Use the imported ProjectsGallery
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/companies" element={<CompaniesPage />} />

        {/* ... other routes */}
      </Routes>
    </Router>
  );
};

export default App;
