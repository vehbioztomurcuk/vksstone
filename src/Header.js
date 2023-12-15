// src/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdownGallery, setShowDropdownGallery] = useState(false);
  const [showDropdownFactory, setShowDropdownFactory] = useState(false);
  const [showDropdownProjects, setShowDropdownProjects] = useState(false);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li onMouseEnter={() => setShowDropdownGallery(true)} onMouseLeave={() => setShowDropdownGallery(false)}>
            Gallery
            {showDropdownGallery && (
              <ul className="dropdown">
                <li><Link to="/gallery/1">Product 1</Link></li>
                <li><Link to="/gallery/2">Product 2</Link></li>
                {/* ... more gallery items */}
              </ul>
            )}
          </li>
          <li onMouseEnter={() => setShowDropdownFactory(true)} onMouseLeave={() => setShowDropdownFactory(false)}>
            Factory
            {showDropdownFactory && (
              <ul className="dropdown">
                {/* Links to factory image galleries */}
                <li><Link to="/factory/gallery">Factory Gallery</Link></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => setShowDropdownProjects(true)} onMouseLeave={() => setShowDropdownProjects(false)}>
            Projects
            {showDropdownProjects && (
              <ul className="dropdown">
                {/* Links to project image galleries */}
                <li><Link to="/projects/gallery">Projects Gallery</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
