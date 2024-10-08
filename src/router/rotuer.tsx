import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart/Cart";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Loigin";
import Join from "../pages/auth/Join";
import Checkout from "../pages/Checkout/Checkout";
import Mypage from "../pages/myPage";
// import MySellerList from "../pages/myPage/mylist/mysellerlist";
import MyOrderList from "../pages/myPage/mylist/myorderlist";
import Home from "../pages/home";
import RouteBanner from "../layout/RouteBanner";
import ProductList from "../pages/ProductList";
import SideNavLayout from "../pages/ManageProduct/SideNavLayout";
import Products from "../pages/ManageProduct/Products";
import AddProductInfo from "../pages/ManageProduct/AddProduct/AddProductInfo";
import AddProductVariant from "../pages/ManageProduct/AddProduct/AddProductVariant";
import OrderCompleted from "../pages/OrderCompleted";

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
        element: <RouteBanner />, //경로배너
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "product-list",
            element: <ProductList />,
          },
        ],
      },
      {
        path: "order-completed",
        element: <OrderCompleted />,
      },
      {
        path: "detail/:productId",
        element: <Detail />,
      },
      // {
      //   path: "add-product",
      //   element: <AddProduct />,
      // },
      {
        path: "manage",
        element: <SideNavLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="products" replace />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "add",
            // element: <AddProduct />,
            children: [
              { index: true, element: <Navigate to="info" replace /> },
              {
                path: "info",
                element: <AddProductInfo />,
              },
              {
                path: "variant",
                element: <AddProductVariant />,
              },
            ],
          },
        ],
      },
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
          // {
          //   path: "saleslist",
          //   element: <MySellerList />,
          // },
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
