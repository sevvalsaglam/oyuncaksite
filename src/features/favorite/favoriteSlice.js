// src/features/favorite/favoriteSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Favorileri getir
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (userId) => {
    const response = await fetch(`http://localhost:8080/api/favorites/${userId}`);
    if (!response.ok) throw new Error('Favoriler yüklenemedi');
    return await response.json();
  }
);

// Favori ekle/sil toggle
export const toggleFavoriteAsync = createAsyncThunk(
  'favorites/toggleFavoriteAsync',
  async ({ userId, product }) => {
    const response = await fetch(`http://localhost:8080/api/favorites/toggle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        productId: product.id,
      }),
    });

    if (!response.ok) throw new Error('Favori işlemi başarısız');
    return await response.json(); // Backend favori listesinin tamamını dönerse
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
    // Local kullanım gerekiyorsa kullanılabilir
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
      })

      .addCase(toggleFavoriteAsync.fulfilled, (state, action) => {
        state.items = action.payload; // Eğer backend yeni listeyi döndüyse
      });
  },
});

export const { toggleFavoriteLocal } = favoriteSlice.actions;
export default favoriteSlice.reducer;
