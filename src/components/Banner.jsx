import React from 'react';
import './Banner.css';

const Banner = ({ type }) => {
  const isHero = type === 'hero';

  return (
    <div className={`banner ${isHero ? 'hero' : 'mid'}`}>
      <h2>{isHero ? 'Haydi Oyun Zamanı!' : 'Yeni Sezon Oyuncaklar Geldi!'}</h2>
    </div>
  );
};

export default Banner;
