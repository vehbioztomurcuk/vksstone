import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logoImage from './logo-raw.png'; // Import the logo image using require

const Header = () => {
  const [showDropdownGallery, setShowDropdownGallery] = useState(false);
  const [showDropdownFactory, setShowDropdownFactory] = useState(false);
  const [showDropdownProjects, setShowDropdownProjects] = useState(false);

  return (
    <header>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Logo" />
        </Link>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              onMouseEnter={() => setShowDropdownGallery(true)}
              onMouseLeave={() => setShowDropdownGallery(false)}
            >
               <Link>Gallery</Link> 
              {showDropdownGallery && (
                <ul className="dropdown">
                  <li>
                    <Link to="/gallery/1">Product 1</Link>
                  </li>
                  <li>
                    <Link to="/gallery/2">Product 2</Link>
                  </li>
                  {/* Add more gallery items */}
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdownFactory(true)}
              onMouseLeave={() => setShowDropdownFactory(false)}
            >
              Factory
              {showDropdownFactory && (
                <ul className="dropdown">
                  <li>
                    <Link to="/factory/gallery">Factory Gallery</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdownProjects(true)}
              onMouseLeave={() => setShowDropdownProjects(false)}
            >
              Projects
              {showDropdownProjects && (
                <ul className="dropdown">
                  <li>
                    <Link to="/projects/gallery">Projects Gallery</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
