import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// localStorage'dan kullanıcıyı başta oku
const storedUser = localStorage.getItem('user');

const initialState = {
  currentUser: storedUser ? JSON.parse(storedUser) : null,
  status: 'idle',
  error: null,
};

// Kullanıcı kaydı
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData) => {
    const response = await fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Kayıt işlemi başarısız oldu');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  }
);

// Giriş fonksiyonu da eklensin mi? (İsteğe bağlı)
// export const loginUser = createAsyncThunk(...);

const registerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = null;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logoutUser } = registerSlice.actions;
export default registerSlice.reducer;
