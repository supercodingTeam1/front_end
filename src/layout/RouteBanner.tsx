import { useLocation, Outlet } from "react-router-dom";

export interface IRouteBannerProps {
  // children: React.ReactNode;
}

export default function RouteBanner() {
  const { pathname } = useLocation();

  const displayText = () => {
    switch (pathname) {
      case "/cart":
        return "Cart";
      case "/":
        return "Home";
      case "/checkout":
        return "Checkout";
      case "/detail":
        return "Detail";

      default:
        return pathname;
    }
  };

  return (
    <>
      <div className="bg-black h-40 flex items-center justify-center text-2xl text-white">
        {displayText()}
      </div>
      <Outlet />
    </>
  );
}
