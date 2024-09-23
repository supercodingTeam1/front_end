import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/HeadNavBar";
import Footer from "./component/Footer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("scrol");
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="h-[70px]"></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
