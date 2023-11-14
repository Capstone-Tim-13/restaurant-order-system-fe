import { Route, Routes } from 'react-router-dom';
import AppShell from '../components/templates/AppShell';
import Dashboard from '../pages/Dashboard';
import PesananPage from '../pages/PesananPage';
import LoginPage from '../pages/LoginPage';
import Menu from '../pages/Menu';
import RetingPage from '../pages/RetingPage';
import AnalisisPage from '../pages/AnalisisPage';
import MenuConvert from '../pages/ConvertMenuPage';

export default function root() {
  const dataRoute = [
    {
      path: '/',
      element: <h1>Landing Page</h1>,
      middleware: 'guest',
    },
    {
      path: '/login',
      element: <LoginPage />,
      middleware: 'guest',
    },
    {
      path: '/admin',
      element: <AppShell />,
      middleware: 'guest',
      withChildren: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/analisis',
          element: <AnalisisPage />,
        },
        {
          path: '/pesanan',
          element: <PesananPage />,
        },
        {
          path: '/menu',
          element: <Menu />,
        },
        {
          path: '/rating',
          element: <RetingPage />,
        },
        {
          path: '/menuconvert',
          element: <MenuConvert />,
        },
      ],
    },
  ];

  return (
    <Routes>
      {dataRoute.map((route, index) => (
        <Route key={index} path={route.path} element={route.middleware === 'guest' ? route.element : route.element}>
          {route.withChildren?.map((outlet, index) => (
            <Route key={index} path={route.path + outlet.path} element={outlet.middleware === 'guest' ? outlet.element : outlet.element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
