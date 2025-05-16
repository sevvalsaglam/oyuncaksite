import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const dummyProducts = [
  { id: 1, name: 'Lego City', category: 'Blok Kitleri', price: 349.99, rating: 4.7, image: '/assets/products/lego1.png' },
  { id: 2, name: 'Hayvanlar Puzzle', category: 'Puzzle Kitleri', price: 129.99, rating: 4.4, image: '/assets/products/puzzle1.png' },
  { id: 3, name: 'Sesli Tren', category: 'Sesli Oyuncaklar', price: 199.99, rating: 4.6, image: '/assets/products/train.png' },
];

const ProductList = ({ type }) => {
  return (
    <div className="product-grid">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
