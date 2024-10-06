import { Outlet } from "react-router-dom";
import Header from "./component/HeadNavBar";
import Footer from "./component/Footer";
import { useScrollTop } from "./hooks/useScrollTop";

function App() {
  useScrollTop();
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
