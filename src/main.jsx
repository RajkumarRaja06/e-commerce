import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Product } from './components';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';
import { ShopProvider } from './context/shopContext';

import App from './App';
import {
  Root,
  ErrorPage,
  Shop,
  Contact,
  LikedItem,
  Cart,
  SignUp,
  Login,
  Profile,
  LoginCredentials,
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
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'likedItem',
        element: <LikedItem />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'loginCredentials',
        element: <LoginCredentials />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ShopProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ShopProvider>
    </UserProvider>
  </React.StrictMode>
);
