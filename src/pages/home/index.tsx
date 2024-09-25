import BestRank from "./BestRank";
import Categories from "./Categories";
import homeBanner1 from "../../assets/HomeBanner1.webp";
import homeBanner2 from "../../assets/HomeBanner2.webp";

export interface IHomeProps {}

export default function Home() {
  return (
    <div>
      <div className="flex px-10 ">
        <img src={homeBanner1} className="w-1/2 -translate-y-[0px] " />
        <img src={homeBanner2} className="w-1/2 -translate-y-[0px] " />
      </div>
      <div className="px-10">
        <Categories />
        <BestRank />
      </div>
    </div>
  );
}
