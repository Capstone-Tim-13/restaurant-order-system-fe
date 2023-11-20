import { Route } from 'react-router-dom';
import GuestMiddleware from '../middlewares/GuestMiddleware';
import AdminMiddleware from '../middlewares/AdminMiddleware';

function renderRouteWithChildren(parentPath, outlet, index) {
  return (
    <Route
      key={index}
      path={parentPath + outlet.path}
      element={
        outlet.middleware === 'guest' ? (
          <GuestMiddleware>{outlet.element}</GuestMiddleware>
        ) : (
          <AdminMiddleware>{outlet.element}</AdminMiddleware>
        )
      }
    />
  );
}

export default renderRouteWithChildren;
