import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchFavorites } from '../features/favorite/favoriteSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { items, status } = useSelector((state) => state.favorites);

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(fetchFavorites(currentUser.id));
    }
  }, [currentUser, dispatch]);

  if (status === 'loading') return <p>Favoriler yükleniyor...</p>;
  if (!items.length) return <p>Favorileriniz boş.</p>;

  return (
    <div style={{ padding: '24px' }}>
      <h2>Favori Ürünler</h2>
      <div className="product-grid">
        {items.map((item) => (
          <ProductCard key={item.id} product={item.product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
