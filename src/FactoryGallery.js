// src/FactoryGallery.js
import React from 'react';
import './App.css';

const FactoryGallery = () => {
  // Example content - replace with actual image paths and descriptions
  const factoryImages = [
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 2 Description',
    },
    // ... more images
  ];

  return (
    <div className="block-gallery">
      {factoryImages.map((image, index) => (
        <div key={index} className="block-gallery-item">
          <img src={image.src} alt={`Factory Item ${index + 1}`} className="gallery-image" />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FactoryGallery;
