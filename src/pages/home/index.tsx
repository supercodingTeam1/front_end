import MxLayout from "../../layout/MxLayout";
import BestRank from "./BestRank";
import Categories from "./Categories";
import HomeBanner1 from "../../assets/jakob-owens-j5kEQ1JLqZk-unsplash.jpg";
import HomeBanner2 from "../../assets/logan-weaver-lgnwvr-GILIG9XVfo4-unsplash.jpg";
import { Suspense } from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <Suspense fallback="loading">
        <div className="flex px-10 transiton">
          <img src={HomeBanner1} className="w-1/2 -translate-y-[0px] " />
          <img src={HomeBanner2} className="w-1/2 -translate-y-[0px] " />
        </div>
      </Suspense>
      <MxLayout>
        <Categories />
        <BestRank />
      </MxLayout>
    </div>
  );
}
