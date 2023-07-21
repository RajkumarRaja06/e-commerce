import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Product } from './components';
import { CartProvider } from './context/cartContext';

import App from './App';
import {
  Root,
  ErrorPage,
  Shop,
  Contact,
  Authentication,
  LikedItem,
  Cart,
} from './routes';

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
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
