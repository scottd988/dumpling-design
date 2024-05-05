import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Error from './Pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Shop /> },
      { path: 'login', element: <LoginSignup /> },
      { path: 'Product', element: <Product /> },
      { path: 'Product/:productId', element: <Product />},
      { path: 'Shop', element: <Shop /> },
      { path: 'Shop/:category', element: <ShopCategory /> },
      { path: 'mens', element: <ShopCategory banner={men_banner} category="mens" />},
      { path: 'womens', element: <ShopCategory banner={women_banner} category="womens" />},
      { path: 'kids', element: <ShopCategory banner={kids_banner} category="kids" />},
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
