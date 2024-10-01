import { useEffect, useState } from "react";
import shoe from "../assets/shoe.png";
import MxLayout from "../../layout/MxLayout";
import Button from "../../component/Button";
import { Link } from "react-router-dom";
import { getItemsInCart } from "../../api/cartApi";
import CartItem from "./CartItem";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 150000;
  const [cartItem, setCartItem] = useState([]);

  // const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const total = price * quantity;

  const handleDelete = async () => {
    try {
      // API 요청 예시
      console.log("삭제 요청");
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  };
  const requestCartItem = async () => {
    try {
      const res = await getItemsInCart();
      if (res.status === 200) {
        setCartItem(res.data);
      }
    } catch {}
  };

  useEffect(() => {
    requestCartItem();
  }, []);

  return (
    <MxLayout>
      <div className="min-h-screen w-full flex flex-col lg:flex-row">
        {/* 왼쪽 상품 목록 */}
        <div className="w-full lg:w-2/3 lg:mr-8 mb-8 lg:mb-0">
          {/* 테이블 제목 */}
          <div className="flex justify-between pb-2 mb-4 font-bold bg-black p-2 overflow-x-auto text-white text-center">
            <div className="w-2/5">상품</div>
            <div className="w-1/5">가격</div>
            <div className="w-1/5">수량</div>
            <div className="w-1/5">총계</div>
          </div>
          {/* 테이블 목록 */}
          {cartItem.map((item) => {
            return <CartItem {...item} />;
          })}
        </div>
        {/* 오른쪽 총계 */}
        <div className="w-full lg:w-1/3 h-auto md:h-[300px] py-5 flex flex-col justify-between items-center rounded-md border border-black">
          <h2 className="text-2xl font-bold mb-4 ">주문 요약</h2>
          <div className="flex justify-between mb-4">
            <span>총계:</span>
            <span className="font-bold">₩ {total.toLocaleString()}</span>
          </div>
          <Link to="/checkout">
            <Button primary>결제하기</Button>
          </Link>
        </div>
      </div>
    </MxLayout>
  );
}
