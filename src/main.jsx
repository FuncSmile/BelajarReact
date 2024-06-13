import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import RegisterPage from './Pages/register.jsx';
import LoginPage from './Pages/login.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductPage from './Pages/product.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <h1>Halaman Utama</h1>,
  errorElement: <ErrorPage />,
},
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)