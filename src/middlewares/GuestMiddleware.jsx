import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useSessionCheck from '../hooks/useSessionCheck';

export default function GuestMiddleware({ children }) {
  const { isLogin } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/admin';
  useSessionCheck(isLogin);

  if (isLogin) {
    return <Navigate to={from} replace={true} />;
  }

  return <>{children}</>;
}
