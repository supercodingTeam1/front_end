import { useState } from "react";
import shoe from "../assets/shoe.png";

export default function Detail() {
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "L"];

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        <div className="w-full md:w-1/2 aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={shoe}
            className="w-full h-full object-cover"
            alt="Asgaard sofa"
          />
        </div>
        <section className="flex flex-col w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Asgaard 소파</h1>
          <h2 className="text-2xl font-semibold">250,000원</h2>
          <p className="text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <label className="block mb-2 font-semibold">사이즈</label>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">수량</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded"
              >
                -
              </button>
              <span className="px-4 py-2 border border-gray-300 rounded">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded"
              >
                +
              </button>
              <button className="ml-4 px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-100">
                장바구니에 추가
              </button>
              <button className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100">
                지금 구매하기
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
