import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/product/productSlice';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ type }) => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const productsToShow = items.slice(0, 12); // Örnek: 12 ürün göster

  if (status === 'loading') return <p>Ürünler yükleniyor...</p>;
  if (status === 'failed') return <p>Hata: {error}</p>;

  return (
    <div className="product-grid">
      {productsToShow.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
