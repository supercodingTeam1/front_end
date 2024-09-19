import { useLocation, Outlet } from "react-router-dom";

export interface IRouteBannerProps {
  // children: React.ReactNode;
}

export default function RouteBanner(props: IRouteBannerProps) {
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

  console.log("path", pathname);
  return (
    <>
      <div className="bg-pink-100 h-40 flex items-center justify-center font-bold text-2xl">
        {displayText()}
      </div>
      <Outlet />
    </>
  );
}
