import { Link, useNavigate } from "react-router-dom";
import loginIcon from "../assets/loginIcon.png";
import cartIcon from "../assets/cartIcon.png";
import searchIcon from "../assets/searchIcon.png";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AuthAtom } from "../recoil/user/userAtom";
import Logout from "./logout";
import { useSearchParams } from "react-router-dom";

export default function Header() {
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const auth = useRecoilValue(AuthAtom);
  const category = [
    { keyword: "Men", value: "남성" },
    { keyword: "Women", value: "여성" },
    { keyword: "Kids", value: "아동" },
  ];

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

  const handleClickCategory = (value) => {
    navigate("product-list");
    setSearchParams({ categoryGender: value });
  };
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
          {category.map((c) => {
            return (
              <div
                onClick={() => handleClickCategory(c.value)}
                className="cursor-pointer"
              >
                {c.keyword}
              </div>
            );
          })}
        </div>
        {/* menu*/}
        <div className="flex gap-6 items-center">
          {auth.islogin ? <Logout /> : ""}
          <Link to={auth.islogin ? "mypage" : "login"}>
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
