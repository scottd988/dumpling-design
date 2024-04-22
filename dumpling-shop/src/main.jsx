import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Error from './Pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <LoginSignup /> },
      { path: 'Product', element: <Product /> },
      { path: 'Shop', element: <Shop /> },
      { path: 'Shop/:category', element: <ShopCategory /> },
      { path: 'mens', element: <ShopCategory category="mens" />},
      { path: 'womens', element: <ShopCategory category="womens" />},
      { path: 'kids', element: <ShopCategory category="kids" />},
      { path: 'productId', element: <Product />},
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
