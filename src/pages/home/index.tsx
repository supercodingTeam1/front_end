import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";
import BestRank from "./BestRank";
import landing from "../../assets/landing.jpg";
import Categories from "./Categories";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <img src={landing} className="w-full -translate-y-[0px] " />
      <MxLayout>
        <Categories />
        <BestRank />
      </MxLayout>
    </div>
  );
}
