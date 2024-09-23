import { useState } from "react";
import shoe from "../assets/shoe.png";
import infinity from "../assets/infinity.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  centerMode: true, // 가운데 모드 활성화
  centerPadding: "0", // 양옆 여백 제거
};

export default function Detail() {
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "L"];
  const images = [shoe, infinity, shoe, infinity];

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center p-8 bg-blue-100">
      <Slider {...settings} className="w-96 h-96 bg-yellow-100">
        {images.map((image) => (
          <img src={image} className="object-contain w-96 h-96" />
        ))}
      </Slider>
      <section className="flex flex-col w-full lg:w-1/3 space-y-4">
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
            <span className="w-10 py-2 border border-gray-300 rounded flex justify-center">
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
  );
}
