import React from 'react';
import './CategoryList.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 47, name: 'Puzzle Kitleri' },
  { id: 48, name: 'Blok Kitleri' },
  { id: 49, name: 'Kostümler' },
  { id: 50, name: 'Çadırlar' },
  { id: 51, name: 'Arabalar' },
  { id: 52, name: 'Oyun Hamuru' },
  { id: 53, name: 'Boyama Setleri' },
  { id: 54, name: 'Organik Örgü Figürler' },
  { id: 55, name: '0-3 Yaş Oyuncakları' },
  { id: 56, name: 'Eğitici Kitaplar' },
  { id: 57, name: 'Minyatür Oyuncaklar' },
  { id: 58, name: 'Mutfak Kiti' },
  { id: 59, name: 'Sesli Oyuncaklar' },
  { id: 60, name: 'Kum Kiti' },
  { id: 61, name: 'Araçlar' },
  { id: 62, name: 'Tasarım Kitleri' },
  { id: 63, name: 'Düzenleyiciler' },
  { id: 64, name: 'Müzik Aletleri' }

];

const CategoryList = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/categories?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="category-card"
          onClick={() => handleClick(cat.name)}
        >
          <img src={`/categories/${cat.id}.png`} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
