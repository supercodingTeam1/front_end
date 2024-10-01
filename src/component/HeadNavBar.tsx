import { Link } from "react-router-dom";
import loginIcon from "../assets/loginIcon.png";
import cartIcon from "../assets/cartIcon.png";
import searchIcon from "../assets/searchIcon.png";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AuthAtom } from "../recoil/user/userAtom";
import Logout from "./logout";


export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const auth = useRecoilValue(AuthAtom)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // 스크롤 다운 - navbar 숨기기
      setIsVisible(false);
    } else {
      // 스크롤 업 - navbar 나타내기
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white  z-50 transition-transform duration-500 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="flex justify-between px-12 h-[70px]  items-center ">
        <Link to="/">ICON</Link>
        {/* category */}
        <div className="flex gap-20 text-base">
          <Link to="product-list">Men</Link>
          <Link to="product-list">Women</Link>
          <Link to="product-list">Kids</Link>
        </div>
        {/* menu*/}
        <div className="flex gap-6 items-center">
          {auth.islogin ? <Logout/> : ''}
          <Link to={auth.islogin ? 'mypage' : 'login'}>
            <img src={loginIcon} className="w-7 h-7" />
          </Link>
          <img src={searchIcon} className="w-6 h-6" />

          <Link to="cart">
            <img src={cartIcon} className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
