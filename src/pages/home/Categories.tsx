import running from "../../assets/running.webp";
import sandals from "../../assets/sandals.webp";
import sneakers from "../../assets/sneakers.webp";
import Button from "../../component/Button";

export interface IAppProps {}

export default function App() {
  const category = [running, sandals, sneakers];
  return (
    <>
      <h1 className="text-2xl pt-12 pb-4 pl-4 font-bold">Shop By Category</h1>
      <div className="w-full flex">
        {category.map((v) => {
          return (
            <div className="flex flex-col gap-2 cursor-pointer relative">
              <img src={v} className="w-[360px]" />
              <span className="absolute bottom-2 left-2">
                {" "}
                <Button className="border-none">Running</Button>
              </span>
            </div>
          );
        })}
        <div className="flex flex-col flex-grow items-center gap-4 justify-end mb-4 px-4">
          <h2 className="text-3xl font-bold">Explore More!</h2>
          <p className="text-gray">더 많은 상품들을 지금 만나보세요.</p>
          <Button primary>전체보기</Button>
        </div>
      </div>
    </>
  );
}
