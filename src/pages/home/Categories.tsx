import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/Button";

export interface IAppProps {}

export default function App() {
  const navigate = useNavigate();
  const sneakers =
    "https://supercoding2406.s3.ap-northeast-2.amazonaws.com/images/828d9967-ea26-4d9d-86f7-a9b4395c6116sneakers.jpg";
  const sandals =
    "https://supercoding2406.s3.ap-northeast-2.amazonaws.com/images/07bf820d-e206-474e-9757-36b166fb75a2sandals.jpg";
  const running =
    "https://supercoding2406.s3.ap-northeast-2.amazonaws.com/images/3b8929ef-9bbd-459d-8725-ecfb7f55a0acrunning.jpg";
  const category = [
    { keyword: "런닝", img: running },
    { keyword: "스니커즈", img: sneakers },
    { keyword: "샌들", img: sandals },
  ];

  const handleClickCategory = (keyword) => {
    navigate("/product-list", { state: { categoryType: keyword } });
  };
  return (
    <>
      <h1 className="text-2xl pt-12 pb-4 pl-4 font-bold">Shop By Category</h1>
      <div className="w-full flex">
        {category.map((v) => {
          return (
            <div
              className="flex flex-col gap-2 cursor-pointer relative"
              onClick={() => handleClickCategory(v.keyword)}
            >
              <img src={v.img} className="w-[360px]" />
              <span className="absolute bottom-2 left-2">
                {" "}
                <Button className="border-none">{v.keyword}</Button>
              </span>
            </div>
          );
        })}
        <div className="flex flex-col flex-grow items-center gap-4 justify-end mb-4 px-4">
          <h2 className="text-3xl font-bold">Explore More!</h2>
          <p className="text-gray">더 많은 상품들을 지금 만나보세요.</p>
          <Link to="/product-list">
            <Button primary>전체보기</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
