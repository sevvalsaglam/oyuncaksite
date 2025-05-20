import { createSlice } from '@reduxjs/toolkit';

// localStorage'dan çek
const storedCart = localStorage.getItem('cart');
const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const saveCart = (items) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(i => i.product.id === item.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ product: item, quantity: 1 });
      }

      saveCart(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.product.id !== action.payload);
      saveCart(state.items);
    },
    increment: (state, action) => {
      const item = state.items.find(i => i.product.id === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.items);
    },
    decrement: (state, action) => {
      const item = state.items.find(i => i.product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCart(state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveCart([]);
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
