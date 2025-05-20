import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedCategory = params.get('category');

  const products = useSelector((state) => state.products.items);
  const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const productSectionRef = useRef();

  useEffect(() => {
    if (selectedCategory && productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory]);

  return (
    <div className="main-container">
      <CategoryList />
      <div ref={productSectionRef}>
        <h3>{selectedCategory ? `"${selectedCategory}" kategorisindeki ürünler` : 'Tüm Ürünler'}</h3>
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
