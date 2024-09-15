import { useLocation } from "react-router-dom";

export interface IRouteBannerProps {}

export function RouteBanner(props: IRouteBannerProps) {
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
    <div className="bg-pink-100 h-72 flex items-center justify-center font-bold text-2xl">
      {displayText()}
    </div>
  );
}
