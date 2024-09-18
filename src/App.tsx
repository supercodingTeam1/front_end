import { Outlet } from "react-router-dom";
import Header from "./component/HeadNavBar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
