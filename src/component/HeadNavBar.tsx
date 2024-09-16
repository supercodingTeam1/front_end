import { Link } from "react-router-dom";
import loginIcon from "../assets/loginIcon.png";
import cartIcon from "../assets/cartIcon.png";
import searchIcon from "../assets/searchIcon.png";

export default function Header() {
  return (
    <nav className="flex justify-between px-12 h-[100px]  items-center">
      <Link to="/">ICON</Link>
      {/* category */}
      <div className="flex gap-20 text-base">
        <Link to="product-list">Men</Link>
        <Link to="product-list">Women</Link>
        <Link to="product-list">Kids</Link>
      </div>
      {/* menu*/}
      <div className="flex gap-6 items-center">
        <Link to="login">
          <img src={loginIcon} className="w-7 h-7" />
        </Link>
        <img src={searchIcon} className="w-6 h-6" />

        <Link to="cart">
          <img src={cartIcon} className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
}
