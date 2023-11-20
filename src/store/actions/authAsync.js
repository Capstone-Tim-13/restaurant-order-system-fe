import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import {
  notifyError,
  notifyLoading,
  notifySuccess,
} from '../../components/atoms/Toast';

export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin',
  async (credentials) => {
    notifyLoading('Login in progress...', 'login');
    try {
      const { data } = await axios.post('/admin/login', {
        email: credentials.email,
        password: credentials.password,
      });
      const token = data.results.access_token;
      notifySuccess('Login Success', 'login');
      credentials.rememberMe
        ? localStorage.setItem('token', token)
        : localStorage.removeItem('token');
      return token;
    } catch (error) {
      notifyError('Login Failed,', 'login');
      console.log(error.response.data.response.message);
      throw error;
    }
  }
);
