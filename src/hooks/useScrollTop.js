import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("scrol");
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤
  }, [pathname]);
};
