import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import titleReducer from './slices/titleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    title: titleReducer,
  },
});
