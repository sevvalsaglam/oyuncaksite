import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // ürün id'leri veya ürün nesneleri
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const itemId = action.payload.id;
      const exists = state.items.find(item => item.id === itemId);

      if (exists) {
        state.items = state.items.filter(item => item.id !== itemId);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
