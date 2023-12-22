// src/MyImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MyImageGallery = () => {
  const images = [
    {
      original: require('./images/slider-image-2.jpg'), 
      thumbnail: require('./images/slider-image-2.jpg'), 
      description: 'slide image 1',
    },
    {
      original: require('./images/slider-image-3.jpg'), 
      thumbnail: require('./images/slider-image-3.jpg'), 
      description: 'slider image 2',
    },
    {
      original: require('./images/slider-image-4.jpg'), 
      thumbnail: require('./images/slider-image-4.jpg'), 
      description: 'slider image 3',
    },
    {
      original: require('./images/slider-image-5.jpg'), 
      thumbnail: require('./images/slider-image-5.jpg'), 
      description: 'slider image 4',
    },
    // Add more images as needed
  ];

  return (
    <div>
      <h2>My React Image Gallery</h2>
      <Gallery items={images} />
    </div>
  );
};

export default MyImageGallery;

