// src/MyImageGallery.js
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

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
    <div className="product-page-container">
      <div className="scaled-gallery">
        <Gallery items={images} />
      </div>
      <div className="product-info">
        <h2>Product Information</h2>
        <p>Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details..Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details..Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details..Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details.. Here you can add all the product details... Here you can add all the product details..</p>
      </div>
    </div>
  );
};

export default MyImageGallery;
