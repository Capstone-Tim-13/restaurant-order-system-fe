import { Route } from 'react-router-dom';
import GuestMiddleware from '../middlewares/GuestMiddleware';
import AdminMiddleware from '../middlewares/AdminMiddleware';
import renderRouteWithChildren from './renderRouteWithChildren';

function renderRoute(route, index) {
  return (
    <Route
      key={index}
      path={route.path}
      element={
        route.middleware ? (
          route.middleware === 'guest' ? (
            <GuestMiddleware>{route.element}</GuestMiddleware>
          ) : (
            <AdminMiddleware>{route.element}</AdminMiddleware>
          )
        ) : (
          route.element
        )
      }>
      {route.withChildren?.map((outlet, index) =>
        renderRouteWithChildren(route.path, outlet, index)
      )}
    </Route>
  );
}

export default renderRoute;
