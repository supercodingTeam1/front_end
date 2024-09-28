import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/HeadNavBar";
import Footer from "./component/Footer";
import { useEffect } from "react";

function App() {
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
