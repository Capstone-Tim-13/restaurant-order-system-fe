import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { login, logout } from '../store/slices/authSlice';
import validateToken from '../services/validateToken';

export default function AdminMiddleware({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token)
        .then(() => {
          dispatch(login(token));
        })
        .catch(() => {
          dispatch(logout());
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return <>{children}</>;
}
