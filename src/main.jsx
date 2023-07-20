import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  Shop,
  Contact,
  Authentication,
  LikedItem,
  Cart,
  Product,
} from './components';
import App from './App';
import { Root, ErrorPage } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'authentication',
        element: <Authentication />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'likedItem',
        element: <LikedItem />,
      },
      {
        path: 'authentication',
        element: <Authentication />,
      },
      {
        path: 'product',
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
