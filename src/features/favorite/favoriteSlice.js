import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (userId) => {
    const response = await fetch(`http://localhost:8080/api/favorites/${userId}`);
    if (!response.ok) throw new Error('Favoriler yüklenemedi');
    return await response.json();
  }
);

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavoriteLocal: (state, action) => {
      const itemId = action.payload.id;
      const exists = state.items.find(item => item.id === itemId);
      if (exists) {
        state.items = state.items.filter(item => item.id !== itemId);
      } else {
        state.items.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavoriteLocal } = favoriteSlice.actions;
export default favoriteSlice.reducer;
export { fetchFavorites };