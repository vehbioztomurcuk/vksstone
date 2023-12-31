// src/HomePage.js
import React from 'react';
import HomeSlider from './HomeSlider';
import InfoBox from './InfoBox';
import Footer from './Footer';
import BackgroundSlider from "./BackgroundSlider.js";



const HomePage = () => {
  return (
    <div>
      <BackgroundSlider />
      <div className="info-boxes">
        <InfoBox title="Product 1" text="Details about Product 1" />
        <InfoBox title="Product 2" text="Details about Product 2" />
        {/* Add more info boxes as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
