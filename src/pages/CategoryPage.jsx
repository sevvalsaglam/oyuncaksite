import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css';
import { BORDER_COLORS } from '../utils/colors';

const CategoryPage = () => {
  const allProducts = useSelector((state) => state.products.items);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState('');

  const categories = useMemo(() => {
    const unique = [...new Set(allProducts.map((p) => p.category))];
    return unique.map((cat, i) => ({
      id: 47 + i,
      name: cat,
      color: BORDER_COLORS[i % BORDER_COLORS.length],
      image: `/categories/${47 + i}.png`,
    }));
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    let filtered = allProducts.filter((p) => p.category === selectedCategory);
    if (sortOption === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sortOption === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sortOption === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    return filtered;
  }, [allProducts, selectedCategory, sortOption]);

  return (
    <div className="category-page">
      <h2>Kategoriler</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => setSelectedCategory(cat.name)}
            style={{ backgroundColor: cat.color }}
          >
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <>
          <div className="products-header">
            <h3>{selectedCategory} Ürünleri</h3>
            <select onChange={(e) => setSortOption(e.target.value)} defaultValue="">
              <option value="">Sıralama</option>
              <option value="price-asc">Fiyat: Artan</option>
              <option value="price-desc">Fiyat: Azalan</option>
              <option value="rating">Puan: Yüksekten</option>
            </select>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
