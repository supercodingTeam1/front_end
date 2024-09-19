import MxLayout from "../layout/MxLayout";

export interface ICheckoutProps {}

export default function Checkout(props: ICheckoutProps) {
  const products = [
    { name: "Product 1", price: 100, quantity: 1, option: "option1" },
    { name: "Product 2", price: 200, quantity: 1, option: "option2" },
  ];
  return (
    <MxLayout>
      <div className="flex p-8 gap-8">
        {/* 청구 세부 정보 */}
        <form className="w-2/5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">청구 정보</h2>
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
          {/* 카드 정보 */}
          <h3 className="text-xl font-semibold mt-4 mb-2">결제 정보</h3>
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
          <input className="p-2 border rounded" type="text" placeholder="CVV" />
        </form>

        {/* 주문 요약 */}
        <div className="w-3/5 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">주문 요약</h2>
          <div className="flex justify-between font-semibold mb-2">
            <h3>상품</h3>
            <h3>소계</h3>
          </div>
          {products.map((product, index) => (
            <div key={index} className="flex justify-between mb-2">
              <p>
                {product.name} x {product.quantity}
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
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors">
            주문하기
          </button>
        </div>
      </div>
    </MxLayout>
  );
}
