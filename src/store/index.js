import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
import productReducer from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    products: productReducer,
  },
});

export default store;
