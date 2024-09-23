import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import shoe from "../../assets/shoe.png";
import landing from "../../assets/landing.jpg";
import infinity from "../../assets/infinity.png";

export interface IBestRankProps {}

export default function BestRank(props: IBestRankProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const items = [shoe, landing, infinity, shoe, landing, infinity];
  return (
    <div>
      <h1 className="text-2xl pt-12 pb-4 pl-4 font-bold">Best Seller</h1>

      <Slider {...settings} className="">
        {items.map((item, index) => {
          return (
            <div className="px-2 cursor-pointer">
              <img src={item} className="w-full h-[400px] object-conver"></img>
              <h2 className="truncate text-xl mt-2">Nike sfs </h2>
              <p className="text-gray text-xl">Mens's shoes</p>
              <h3 className="my-3">1250,000원</h3>
            </div>
          );
        })}
      </Slider>
      {/* 반응형으로 만들려면 어떻게? */}
    </div>
  );
}
