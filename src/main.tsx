import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import App from "./App";
import Detail from "./pages/Detail";
import { Checkout } from "./pages/Checkout";
import ManageProduct from "./pages/ManageProduct";
import AddProductInfo from "./pages/ManageProduct/AddProduct/AddProductInfo";
import Products from "./pages/ManageProduct/Products";
import AddProductVariant from "./pages/ManageProduct/AddProduct/AddProductVariant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "detail/:productId",
        element: <Detail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "manage",
        element: <ManageProduct />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "add-info",
            element: <AddProductInfo />,
          },
          {
            path: "add-variant",
            element: <AddProductVariant />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
