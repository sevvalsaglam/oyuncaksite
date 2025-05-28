import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteAsync } from '../features/favorite/favoriteSlice'; // async thunk
import { addToCart } from '../features/cart/cartSlice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isFavorite = favorites.some((item) => item.product?.id === product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Favorilere eklemek için giriş yapmalısınız.');
      return;
    }

    dispatch(toggleFavoriteAsync({ userId: currentUser.id, product }));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Sepete eklemek için giriş yapmalısınız.');
      return;
    }

    dispatch(addToCart({
      userId: currentUser.id,
      productId: product.id,
      quantity: 1
    }));
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
