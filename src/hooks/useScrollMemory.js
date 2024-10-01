import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useScrollMemory = () => {
  const scrollPositions = useRef({});
  const location = useLocation();
  const navigate = useNavigate();
  console.log("neww");

  // 현재 스크롤 위치 저장
  useEffect(() => {
    const saveScrollPosition = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
      console.log("scrollPositions", scrollPositions.current);
    };

    window.addEventListener("scroll", saveScrollPosition);

    return () => window.removeEventListener("scroll", saveScrollPosition);
  }, [location]);

  // 페이지 이동 시 스크롤 위치 복원
  useEffect(() => {
    if (scrollPositions.current[location.pathname]) {
      window.scrollTo(0, scrollPositions.current[location.pathname]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // 이전 페이지로 이동하는 함수
  //   const goBack = () => {
  //     navigate(-1);
  //   };

  //   return { goBack };
};

export default useScrollMemory;
