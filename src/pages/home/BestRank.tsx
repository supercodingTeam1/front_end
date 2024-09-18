import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "../../component/ItemCard";
import { useState } from "react";

export interface IBestRankProps {}

export default function BestRank(props: IBestRankProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "100px",
    pauseOnHover: true,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
  };
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Slider {...settings} className="w-full py-6 my-10">
        {items.map((item, index) => {
          return (
            <div
              className={`px-2 transition-transform duration-300 ease-in-out ${
                index === currentIndex ? "scale-110" : "scale-90"
              }`}
            >
              <ItemCard />
            </div>
          );
        })}
      </Slider>

      {/* 반응형으로 만들려면 어떻게? */}
    </div>
  );
}
