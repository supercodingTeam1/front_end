import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Mypage from "../pages/myPage/Mypage";
import Login from "../pages/auth/Loigin";
import Join from "../pages/auth/Join";
import { Checkout } from "../pages/Checkout";
import SideNav from "../pages/ManageProduct/SideNavLayout";
import Products from "../pages/ManageProduct/Products";
import AddProductInfo from "../pages/ManageProduct/AddProduct/AddProductInfo";
import AddProductVariant from "../pages/ManageProduct/AddProduct/AddProductVariant";
import { AddProduct } from "../pages/ManageProduct/AddProduct";

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
        path: "add-product",
        element: <AddProduct />,
      },
      // {
      //   path: "manage",
      //   element: <SideNav />,
      //   children: [
      //     {
      //       index: true,
      //       element: <Navigate to="products" replace />,
      //     },
      //     {
      //       path: "products",
      //       element: <Products />,
      //     },
      //     {
      //       path: "add",
      //       element: <AddProduct />,
      //     },
      //   ],
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "mypage",
        element: <Mypage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
