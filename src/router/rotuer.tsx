import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Loigin";
import Join from "../pages/auth/Join";
import { Checkout } from "../pages/Checkout";
import Mypage from "../pages/myPage";
import { AddProduct } from "../pages/ManageProduct/AddProduct";
import MySellerList from "../pages/myPage/mylist/mysellerlist";
import MyOrderList from "../pages/myPage/mylist/myorderlist";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
        children: [
          {
            path: "saleslist",
            element: <MySellerList />,
          },
          {
            path: "orderlist",
            element: <MyOrderList />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
