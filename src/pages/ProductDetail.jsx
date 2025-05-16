import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorite/favoriteSlice';
import { addToCart } from '../features/cart/cartSlice';

const mockProducts = [
  {
    id: '1',
    name: 'Lego City',
    category: 'Blok Kitleri',
    price: 349.99,
    rating: 4.7,
    image: '/assets/products/lego1.png',
    age: '6+',
    material: 'Plastik',
    description: 'Hayal gücünü geliştiren Lego City serisi.',
  },
  {
    id: '2',
    name: 'Hayvanlar Puzzle',
    category: 'Puzzle Kitleri',
    price: 129.99,
    rating: 4.4,
    image: '/assets/products/puzzle1.png',
    age: '4+',
    material: 'Mukavva',
    description: 'Hayvanları öğrenirken eğlenin.',
  },
  // Diğer ürünler...
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Yükleniyor...</div>;

  const relatedProducts = mockProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites.items);
const isFavorite = favorites.some((item) => item.id === product.id);

const handleFavorite = () => {
  dispatch(toggleFavorite(product));
};
const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detail">
      <div className="product-main">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p><strong>Kategori:</strong> {product.category}</p>
          <p><strong>Fiyat:</strong> {product.price.toFixed(2)} ₺</p>
          <p><strong>Puan:</strong> ⭐ {product.rating}</p>
          <p><strong>Yaş Grubu:</strong> {product.age}</p>
          <p><strong>Materyal:</strong> {product.material}</p>
          <p>{product.description}</p>

          <div className="actions">
          <button className="btn primary" onClick={handleAddToCart}>
  Sepete Ekle
</button>
            <button className="btn secondary" onClick={handleFavorite}>
  {isFavorite ? '❤️ Favoriden Çıkar' : '🤍 Favorilere Ekle'}
</button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h3>Benzer Ürünler</h3>
          <div className="related-list">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
