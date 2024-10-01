import BestRank from "./BestRank";
import Categories from "./Categories";

export interface IHomeProps {}

export default function Home() {
  const homeBanner1 =
    "https://supercoding2406.s3.ap-northeast-2.amazonaws.com/images/da5fb8b5-bde7-4dce-a5a0-ffc84e14fd6ejakob-owens-j5kEQ1JLqZk-unsplash.jpg";
  const homeBanner2 =
    "https://supercoding2406.s3.ap-northeast-2.amazonaws.com/images/f34ce25d-6d39-49f7-b473-dfbf391a36a6logan-weaver-lgnwvr-GILIG9XVfo4-unsplash.jpg";
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
