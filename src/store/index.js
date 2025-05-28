import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/registerSlice';
import categoryReducer from '../features/category/categorySlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
import productReducer from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    categories: categoryReducer,
    favorites: favoriteReducer,
    products: productReducer,
  },
});

export default store;
