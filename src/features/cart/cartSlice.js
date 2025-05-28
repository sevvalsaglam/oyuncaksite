// src/features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Kullanıcıya özel sepeti çek
export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
  const response = await fetch(`http://localhost:8080/api/cart/${userId}`);
  const data = await response.json();
  return data;
});

// Ürünü sepete ekle veya güncelle
export const addToCart = createAsyncThunk('cart/addToCart', async ({ userId, productId, quantity }) => {
  const response = await fetch(`http://localhost:8080/api/cart/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, productId, quantity }),
  });
  const data = await response.json();
  return data;
});



// Ürünü sepetten sil
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (cartItemId) => {
    await fetch(`http://localhost:8080/api/cart/${cartItemId}`, {
      method: 'DELETE',
    });
    return cartItemId;
  }
);

// ✅ Sepeti tamamen temizle
export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (userId) => {
    await fetch(`http://localhost:8080/api/cart/clear/${userId}`, {
      method: 'DELETE',
    });
    return userId;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })

      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })

      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
