// src/components/BackgroundSlider.js
import React from 'react';
import Slider from 'react-slick';
import "./App.css";

const images = [
  { src: require('/home/user1/github-projects/vksstone-website/src/images/hq-marble-1.jpg'), text: 'Welcome to VKSStone' },
  { src: require('/home/user1/github-projects/vksstone-website/src/images/hq-marble-2.jpg'), text: 'Welcome to VKSStone 2' },
  // Add more images and texts as needed
];


const BackgroundSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className='slider-image'
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='slider-text'>{image.text}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundSlider;
