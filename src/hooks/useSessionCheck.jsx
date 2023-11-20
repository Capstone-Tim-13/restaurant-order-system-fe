import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/slices/authSlice';
import {
  notifyError,
  notifyLoading,
  notifySuccess,
} from '../components/atoms/Toast';
import validateToken from '../services/validateToken';

const useSessionCheck = (isLogin) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('token');

      if (token && !isLogin) {
        notifyLoading('Pengecekan sesi..', 'ceksesi');
        try {
          await validateToken(token);
          dispatch(login(token));
          notifySuccess('Sesi aktif', 'ceksesi');
        } catch (error) {
          dispatch(logout());
          notifyError('Sesi berakhir, silahkan login kembali', 'ceksesi');
        }
      }
    };

    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, validateToken, notifyLoading, notifySuccess, notifyError]);

  return null; // You can return any value or nothing, depending on your needs
};

export default useSessionCheck;
