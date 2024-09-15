import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Loigin";
import Join from "../pages/auth/Join";
import { Checkout } from "../pages/Checkout";
import ManageProduct from "../pages/ManageProduct";
import Products from "../pages/ManageProduct/Products";
import AddProductInfo from "../pages/ManageProduct/AddProduct/AddProductInfo";
import AddProductVariant from "../pages/ManageProduct/AddProduct/AddProductVariant";
import Mypage from "../pages/myPage";

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
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'join',
        element: <Join/>
      },
      {
        path:'mypage',
        element: <Mypage/>
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;