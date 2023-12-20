// src/FactoryGallery.js
import React from 'react';

const FactoryGallery = () => {
  // Example content - replace with actual image paths and descriptions
  const factoryImages = [
    {
      src: require('./images/hq-marble-2.jpg'),
      description: 'Factory Image 1 Description',
    },
    // ... more images
  ];

  return (
    <div className="block-gallery">
      {factoryImages.map((image, index) => (
        <div key={index} className="block-gallery-item">
          <img src={image.src} alt={`Factory item ${index + 1}`} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FactoryGallery;
