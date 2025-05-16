import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
});

export default store;
