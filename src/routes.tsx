import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { LoginLayout } from './layouts';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        // trocar dps
        path: '/a',
        element: <Login />,
      },
      {
        path: '/', 
        element: <Login />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
];

const routesList: RouteObject[] = [
  ...publicRoutes,
];

export const routes = createBrowserRouter(routesList);
