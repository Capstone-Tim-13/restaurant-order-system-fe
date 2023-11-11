import { Route, Routes } from "react-router-dom";
import AppShell from "../components/templates/AppShell";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import Menu from '../pages/Menu';

export default function root() {
  const dataRoute = [
    {
      path: "/",
      element: <h1>Landing Page</h1>,
      middleware: "guest",
    },
    {
      path: "/login",
      element: <LoginPage />,
      middleware: "guest",
    },
    {
      path: "/admin",
      element: <AppShell />,
      middleware: "guest",
      withChildren: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/analisis",
          element: <h1>Analisis</h1>,
        },
        {
          path: "/pesanan",
          element: <h1>Pesanan</h1>,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/rating",
          element: <h1>Rating</h1>,
        },
      ],
    },
  ];

  return (
    <Routes>.
      {dataRoute.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.middleware === "guest" ? route.element : route.element}
        >
          {route.withChildren?.map((outlet, index) => (
            <Route
              key={index}
              path={route.path + outlet.path}
              element={
                outlet.middleware === "guest" ? outlet.element : outlet.element
              }
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
