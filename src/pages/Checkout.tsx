import { Link } from "react-router-dom";
import Button from "../component/Button";
import MxLayout from "../layout/MxLayout";

export default function Checkout() {
  const products = [
    { name: "Product 1", price: 100, quantity: 1, option: "option1" },
    { name: "Product 2", price: 200, quantity: 1, option: "option2" },
  ];
  return (
    <MxLayout>
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* 받는 사람 정보 & 결제 정보*/}
        <form className="w-full flex lg:flex-col lg:w-2/5 gap-6">
          <div className="flex flex-col gap-4 w-1/2 lg:w-full">
            <h2 className="text-2xl font-bold">받는 사람</h2>
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="이름"
            />
            <input
              className="p-2 border rounded"
              type="tel"
              placeholder="전화번호"
            />
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="주소"
            />
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="도시"
            />
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="주/도"
            />
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="우편번호"
            />
          </div>
          {/* 카드 정보 */}
          <div className="flex flex-col gap-4 w-1/2 lg:w-full">
            <h3 className="text-2xl font-semibold">결제 정보</h3>
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="카드 번호"
            />
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="만료일"
            />
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="CVV"
            />
          </div>
        </form>

        {/* 주문 요약 */}
        <div className="w-full lg:w-3/5 p-6">
          <h2 className="text-2xl font-bold mb-4">주문 요약</h2>
          <div className="flex justify-between font-semibold mb-2">
            <h3>상품</h3>
            <h3>가격</h3>
          </div>
          {products.map((product, index) => (
            <div key={index} className="flex justify-between mb-2">
              <p>
                {product.name}
                <span className="text-gray"> x {product.quantity}</span>
              </p>
              <p>₩{product.price.toLocaleString()}</p>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-4 pt-4 border-t">
            <h3>총계</h3>
            <h3>
              ₩
              {products
                .reduce((acc, product) => acc + product.price, 0)
                .toLocaleString()}
            </h3>
          </div>
          <div className="my-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </div>
          <Link to="/order-completed">
            <Button primary className="w-full">
              주문하기
            </Button>
          </Link>
        </div>
      </div>
    </MxLayout>
  );
}
