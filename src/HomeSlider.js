// src/HomeSlider.js
import React from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <div className="home-slider">
      <Slider {...settings}>
        <div>
          <img src="/images/slider-image-2.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slider-image-2.jpg" alt="Slide 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default HomeSlider;
