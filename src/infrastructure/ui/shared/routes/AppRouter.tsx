import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { authRoutes } from "../../modules/auth/auth.routes";
import { homeRoutes } from "../../modules/home/routes/home.routes";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Navigate to="/products" replace /> },
      ...authRoutes,
      ...homeRoutes,
    ],
  },
  {
    path: '*',
    element: <div>404 - Página no encontrada</div>
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};