import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorite/favoriteSlice';
import { addToCart } from '../features/cart/cartSlice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(product));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h4>{product.name}</h4>
        <p className="category">
          {product.category?.name || "Kategori Yok"}
        </p>
        <p className="price">{product.price.toFixed(2)} ₺</p>
        <div className="card-actions">
          <span onClick={handleFavoriteClick} className="fav-icon">
            {isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
          </span>
          <span onClick={handleAddToCart} className="cart-icon">
            <FiShoppingCart />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
