import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getItemDetails } from "../api/productApi";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import { addToCart } from "../api/cartApi";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "0",
};

interface Option {
  optionId: string;
  size: number;
}
// interface Category {
//   category_gender: string;
//   category_type: string;
// }

interface Product {
  item_id: number | string;
  option: Option[];
  item_images: string[];
  item_name: string;
  price: number;
  description: string;
}
export default function Detail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product>({
    item_id: "",
    option: [],
    item_images: [],
    item_name: "",
    price: 0,
    description: "",
  });
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  useEffect(() => {
    requestDetail();
  }, []);

  const requestDetail = async () => {
    try {
      const res = await getItemDetails({ item_id: productId });
      if (res.status === 200) {
        setProduct(res.item_detail);
      }
    } catch {}
  };

  const handleClickAdd = async () => {
    if (selectedOptionId === null) return;
    try {
      const res = await addToCart({
        option_id: selectedOptionId,
        quantity: quantity,
      });
      if (res.status === 200) {
        // toast

        toast("장바구니에 추가되었습니다.");
      }
    } catch {}
  };

  const handleBuyNow = async () => {
    if (selectedOptionId === null) return;
    console.log(typeof quantity);

    const params = [
      {
        quantity: quantity,
        option_id: selectedOptionId,
        item_name: product.item_name + " " + selectedSize,
        price: quantity * product.price,
      },
    ];
    navigate("/checkout", {
      state: {
        items: params,
        total: quantity * product.price,
        isFromCart: false,
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center p-8 bg-blue-100">
      <Slider {...settings} className="w-96 h-96 overflow-hidden">
        {product.item_images?.map((image, index) => (
          <img src={image} className="object-contain w-96 h-96" key={index} />
        ))}
      </Slider>
      <section className="flex flex-col w-full lg:w-1/3 space-y-4">
        <h1 className="text-3xl font-bold">{product.item_name}</h1>
        <h2 className="text-2xl font-semibold">
          {product.price.toLocaleString()}원
        </h2>
        <p className="text-gray-600">{product.description}</p>
        <div>
          <label className="block mb-2 font-semibold">사이즈</label>
          <div className="flex space-x-2">
            {product.option?.map((item) => (
              <button
                key={item.optionId}
                className={`px-4 py-2 border border-gray rounded hover:border-tahiti ${
                  selectedOptionId === item.optionId ? "border-tahiti" : ""
                }`}
                onClick={() => {
                  setSelectedOptionId(item.optionId);
                  setSelectedSize(item.size);
                }}
              >
                {item.size}
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

            <Button
              primary
              onClick={handleClickAdd}
              disabled={!selectedOptionId}
            >
              장바구니에 추가
            </Button>
            <Button onClick={handleBuyNow}>지금 구매하기</Button>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
}
