import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";
import BestRank from "./BestRank";
import homeBanner from "../../assets/homeBanner.png";
import landing from "../../assets/landing.jpg";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <img src={landing} className="w-full -translate-y-[0px] " />
      <MxLayout>
        <ItemCard />
        <BestRank />
      </MxLayout>
    </div>
  );
}
