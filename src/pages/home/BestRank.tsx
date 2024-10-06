import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getItemList } from "../../api/productApi";
import { Link } from "react-router-dom";

interface Item {
  item_id: number;
  item_image: string;
  item_name: string;
  category: Category;
  price: number;
}
interface Category {
  categoryGender: string;
  categoryType: string;
}

export default function BestRank() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "100px",
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
  };
  const [_, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

  const requestBestRank = async () => {
    const res = await getItemList({ sort: "sales", order: "desc" });
    if (res.status === 200) {
      setItems(res.items.content);
    }
  };
  useEffect(() => {
    requestBestRank();
  }, []);
  return (
    <div>
      <h1 className="text-2xl pt-12 pb-4 pl-4 font-bold">Best Seller</h1>

      <Slider {...settings} className="">
        {items.map((item: Item, index) => {
          return (
            <Link to={`/detail/${item.item_id}`} key={item.item_id}>
              <div className="px-2 cursor-pointer relative">
                <img
                  src={item.item_image}
                  className="w-full h-[400px] object-conver"
                ></img>
                <h2 className="truncate text-xl mt-2">{item.item_name}</h2>
                <p className="text-gray text-xl">
                  {item.category.categoryGender} {item.category.categoryType}
                </p>
                <h3 className="my-3">{item.price.toLocaleString()}원</h3>
                <div className="absolute right-0 top-0 bg-black text-white w-8 h-8 flex items-center justify-center rounded-sm">
                  {index + 1}
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
      {/* 반응형으로 만들려면 어떻게? */}
    </div>
  );
}
