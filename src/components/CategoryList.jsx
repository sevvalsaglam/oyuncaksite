import React from 'react';
import './CategoryList.css';

const categories = [
  { id: 1, name: 'Puzzle Kitleri', image: '/assets/categories/puzzle.png' },
  { id: 2, name: 'Blok Kitleri', image: '/assets/categories/blocks.png' },
  { id: 3, name: 'Kostümler', image: '/assets/categories/costume.png' },
  { id: 4, name: 'Çadırlar', image: '/assets/categories/tent.png' },
  { id: 5, name: 'Araba Kitleri', image: '/assets/categories/car.png' },
  { id: 6, name: 'Oyun Hamuru', image: '/assets/categories/playdough.png' },
  { id: 7, name: 'Boyama Setleri', image: '/assets/categories/coloring.png' },
  { id: 8, name: 'Sesli Oyuncaklar', image: '/assets/categories/sound.png' },
];

const CategoryList = () => {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <div key={cat.id} className="category-card">
          <img src={cat.image} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
