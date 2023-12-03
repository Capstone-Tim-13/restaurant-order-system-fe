import { Routes } from 'react-router-dom';
import AppShell from '../components/templates/AppShell';
import Dashboard from '../pages/Dashboard';
import PesananPage from '../pages/PesananPage';
import LoginPage from '../pages/LoginPage';
import Menu from '../pages/Menu';
import LandingPage from "../pages/LandingPage";
import RetingPage from '../pages/RetingPage';
import AnalisisPage from '../pages/AnalisisPage';
import MenuConvert from '../pages/ConvertMenuPage';
import TambahMenuPage from "../pages/TambahMenuPage";
import renderRoute from './renderRoute';
import ErrorPage from '../pages/ErrorPage'; 

export default function root() {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
      middleware: "guest",
    },
    {
      path: '/login',
      element: <LoginPage />,
      middleware: 'guest',
    },
    {
      path: '/admin',
      element: <AppShell />,
      middleware: 'admin',
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
        {
          path: '/menutambah',
          element: <TambahMenuPage />,
        },
      ],
    },
    {
      path: '*', 
      element: <ErrorPage />,
      middleware: 'guest',
    },
  ];

  return (
    <Routes>{routes.map((route, index) => renderRoute(route, index))}</Routes>
  );
}
