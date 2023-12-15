// src/MyImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MyImageGallery = () => {
  const images = [
    {
      original: '/images/slider-image-2.jpg',
      thumbnail: '/images/slider-image-2.jpg',
      description: 'slide image 1',
    },
    {
      original: '/images/slider-image-2.jpg',
      thumbnail: '/images/slider-image-2.jpg',
      description: 'slider image 2',
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

