import { Route } from 'react-router-dom';

function renderRouteWithChildren(parentPath, outlet, index) {
  return (
    <Route
      key={index}
      path={parentPath + outlet.path}
      element={outlet.element}
    />
  );
}

export default renderRouteWithChildren;
