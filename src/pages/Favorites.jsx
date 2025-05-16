import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) return <p>Favorileriniz boş.</p>;

  return (
    <div style={{ padding: '24px' }}>
      <h2>Favori Ürünler</h2>
      <div className="product-grid">
        {favorites.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
