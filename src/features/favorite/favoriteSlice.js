import { createSlice } from '@reduxjs/toolkit';

// localStorage'dan çek
const storedFavorites = localStorage.getItem('favorites');
const initialState = {
  items: storedFavorites ? JSON.parse(storedFavorites) : [],
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

      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
