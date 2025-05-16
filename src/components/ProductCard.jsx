import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorite/favoriteSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Link'e tıklanmasın
    dispatch(toggleFavorite(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h4>{product.name}</h4>
        <p>{product.category}</p>
        <p>{product.price.toFixed(2)} ₺</p>
        <div className="card-actions">
          <span>⭐ {product.rating}</span>
          <span onClick={handleFavoriteClick} className="fav-icon">
            {isFavorite ? '❤️' : '🤍'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
