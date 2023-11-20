import { createSlice } from '@reduxjs/toolkit';
import { loginAdmin } from '../actions/authAsync';

const initialState = {
  isLoading: false,
  isLogin: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.token = action.payload;
      })
      .addCase(loginAdmin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
