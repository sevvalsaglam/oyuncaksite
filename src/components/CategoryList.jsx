import React from 'react';
import './CategoryList.css';

const categories = [
  { id: 47, name: 'Puzzle Kitleri' },
  { id: 48, name: 'Blok Kitleri' },
  { id: 49, name: 'Kostümler' },
  { id: 50, name: 'Çadırlar' },
  { id: 51, name: 'Araba Kitleri' },
  { id: 52, name: 'Oyun Hamuru' },
  { id: 53, name: 'Boyama Setleri' },
  { id: 54, name: 'Sesli Oyuncaklar' },
  { id: 55, name: 'Figürler' },
  { id: 56, name: '0-3 Yaş Oyuncakları' },
  { id: 57, name: 'Eğitici Kitaplar' },
  { id: 58, name: 'Hayvan Figürleri' },
  { id: 59, name: 'Bilim Setleri' },
  { id: 60, name: 'Müzik Aletleri' },
  { id: 61, name: 'Zeka Oyunları' },
];

const CategoryList = () => {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <div key={cat.id} className="category-card">
          <img src={`/categories/${cat.id}.png`} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
