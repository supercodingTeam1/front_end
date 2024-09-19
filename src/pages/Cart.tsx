import { useState } from "react";
import deleteIcon from "../assets/deleteIcon.png";
import shoe from "../assets/shoe.png";
import MxLayout from "../layout/MxLayout";
import Button from "../component/Button";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 150000;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(Math.min(Math.max(newQuantity, 1), 2)); // 최소 1, 최대 2로 제한
  };

  const total = price * quantity;

  const handleDelete = async () => {
    try {
      // API 요청 예시
      console.log("삭제 요청");
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  };

  return (
    <MxLayout>
      <div className="min-h-screen w-full flex flex-col md:flex-row">
        {/* 왼쪽 상품 목록 */}
        <div className="w-full md:w-2/3 md:mr-8 mb-8 md:mb-0">
          {/* 테이블 제목 */}
          <div className="flex justify-between pb-2 mb-4 font-bold bg-black p-2 overflow-x-auto text-white">
            <div className="w-2/5 pl-2 md:pl-10">상품</div>
            <div className="w-1/5 text-center">가격</div>
            <div className="w-1/5 text-center">수량</div>
            <div className="w-1/5 text-center">총계</div>
          </div>
          {/* 테이블 목록 */}
          <div className="flex justify-between items-center overflow-x-auto">
            <div className="w-2/5 flex items-center">
              <img src={shoe} className="w-[100px] h-[100px] mr-4" />
              <div className="flex flex-col">
                <div>Asgaard sofa</div>
                <div>사이즈: 250</div>
              </div>
            </div>
            <div className="w-1/5 text-center">₩ {price.toLocaleString()}</div>
            <div className="w-1/5 text-center">
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 p-1 border rounded"
                min="1"
                max="2" // 최대값 2 추가
              />
            </div>
            <div className="w-1/5 text-center">₩ {total.toLocaleString()}</div>
            <img
              src={deleteIcon}
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={handleDelete}
            />
          </div>
        </div>
        {/* 오른쪽 총계 */}
        <div className="w-full md:w-1/3 h-auto md:h-[300px] bg-black py-5 flex flex-col justify-between items-center  text-white">
          <h2 className="text-2xl font-bold mb-4">주문 요약</h2>
          <div className="flex justify-between mb-4">
            <span>총계:</span>
            <span className="font-bold">₩ {total.toLocaleString()}</span>
          </div>

          <Button primary>결제하기</Button>
        </div>
      </div>
    </MxLayout>
  );
}
