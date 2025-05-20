import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ type }) => {
  const isHero = type === 'hero';

  const heroImages = [
    '/banner/51.jpg',
    '/banner/52.jpg',
    '/banner/53.jpg'
  ];

  const midImages = [
    '/banner/54.jpg',
    '/banner/55.jpg',
    '/banner/56.jpg'
  ];

  const images = isHero ? heroImages : midImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`banner ${isHero ? 'hero' : 'mid'}`}>
      <div className="banner-slider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
        <div className="banner-content">
          <h2>{isHero ? '' : ''}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
