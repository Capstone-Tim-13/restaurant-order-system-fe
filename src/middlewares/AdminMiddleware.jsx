import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useSessionCheck from '../hooks/useSessionCheck';

export default function AdminMiddleware({ children }) {
  const location = useLocation();
  const { isLogin } = useSelector((state) => state.auth);
  useSessionCheck(isLogin);

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return <>{children}</>;
}
