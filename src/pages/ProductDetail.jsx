import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteAsync } from '../features/favorite/favoriteSlice';
import { addToCart } from '../features/cart/cartSlice';
import ProductCard from '../components/ProductCard';
import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import './ProductDetail.css';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const favorites = useSelector((state) => state.favorites.items);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p>Ürün bulunamadı.</p>;

  const isFavorite = favorites.some((f) => f.product?.id === product.id);

  const related = products.filter(
    (p) => p.category?.id === product.category?.id && p.id !== product.id
  );

  const handleFavorite = () => {
    if (!currentUser) {
      toast.warning('Favorilere eklemek için giriş yapmalısınız!');
      return;
    }

    dispatch(toggleFavoriteAsync({ userId: currentUser.id, product }));
  };

  const handleAddToCart = () => {
    if (!currentUser) {
      toast.warning('Sepete eklemek için giriş yapmalısınız!');
      return;
    }

    dispatch(addToCart({
      userId: currentUser.id,
      productId: product.id,
      quantity: 1
    }));
  };

  const filledStars = Math.floor(product.rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="product-detail-page">
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="category">{product.category?.name || "Kategori Yok"}</p>

          <div className="rating-stars">
            {[...Array(filledStars)].map((_, i) => (
              <AiFillStar key={`full-${i}`} color="#feca57" />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <AiFillStar key={`empty-${i}`} color="#ccc" />
            ))}
            <span className="rating-text">({product.rating})</span>
          </div>

          <p className="desc">{product.description}</p>
          <p><strong>Yaş Grubu:</strong> {product.age_range}</p>
          <p><strong>Materyal:</strong> {product.material}</p>
          <p className="price">{product.price.toFixed(2)} ₺</p>

          <div className="actions">
            <button className="btn primary" onClick={handleAddToCart}>
              <FiShoppingCart style={{ marginRight: '8px' }} />
              Sepete Ekle
            </button>
            <button className="btn secondary" onClick={handleFavorite}>
              {isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />} Favori
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h3>Benzer Ürünler</h3>
          <div className="related-list">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
