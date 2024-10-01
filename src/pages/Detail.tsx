import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getItemDetails } from "../api/productApi";
import { useParams } from "react-router-dom";
import Button from "../component/Button";
import { addToCart } from "../api/cartApi";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   centerMode: true,
//   centerPadding: "0",
// };

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
  price: number | string;
  description: string;
}
export default function Detail() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product>({
    item_id: "",
    option: [],
    item_images: [],
    item_name: "",
    price: "",
    description: "",
  });
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

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
    if (selectedSize === null) return;
    try {
      const res = await addToCart({
        option_id: selectedSize,
        quantity: quantity,
      });
      if (res.status === 200) {
        // toast

        toast("장바구니에 추가되었습니다.");
      }
    } catch {}
  };

  useEffect(() => {
    console.log(selectedSize);
  }, [selectedSize]);

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center p-8 bg-blue-100">
      {/* <Slider {...settings} className="w-96 h-96"> */}
      {product.item_images?.map((image) => (
        <img src={image} className="object-contain w-96 h-96" />
      ))}
      {/* </Slider> */}
      <section className="flex flex-col w-full lg:w-1/3 space-y-4">
        <h1 className="text-3xl font-bold">Asgaard 소파</h1>
        <h2 className="text-2xl font-semibold">250,000원</h2>
        <p className="text-gray-600">{product.description}</p>
        <div>
          <label className="block mb-2 font-semibold">사이즈</label>
          <div className="flex space-x-2">
            {product.option?.map((item) => (
              <button
                key={item.optionId}
                className={`px-4 py-2 border border-gray rounded hover:border-tahiti ${
                  selectedSize === item.optionId ? "border-tahiti" : ""
                }`}
                onClick={() => setSelectedSize(item.optionId)}
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

            <Button primary onClick={handleClickAdd} disabled={!selectedSize}>
              장바구니에 추가
            </Button>
            <Button>지금 구매하기</Button>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
}
