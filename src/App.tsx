import { Outlet } from "react-router-dom";
import Header from "./component/HeadNavBar";
import Footer from "./component/Footer";
import { RouteBanner } from "./component/RouteBanner";

function App() {
  return (
    <>
      <Header />
      <RouteBanner />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
