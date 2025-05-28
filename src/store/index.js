import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import categoryReducer from '../features/category/categorySlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
import productReducer from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoryReducer,
    favorites: favoriteReducer,
    products: productReducer,
  },
});

export default store;
