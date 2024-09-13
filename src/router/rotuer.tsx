import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Mypage from "../pages/myPage/Mypage";
import Login from "../pages/auth/Loigin";
import Join from "../pages/auth/Join";

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
        path : "login",
        element: <Login/>
      },
      {
        path: "join",
        element : <Join/>
      },
      {
        path: 'myPage',
        element : <Mypage/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;