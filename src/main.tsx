import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProductsProvider from "./app/productsContext";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Products/>,
  },
  {
    path: "/product_details",
    element: <ProductDetails />
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>,
)
