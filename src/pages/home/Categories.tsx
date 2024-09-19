import running from "../../assets/running.jpeg";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const category = [1, 2, 3];
  return (
    <div className="w-full flex justify-between ">
      {category.map((v) => {
        return (
          <div className="flex flex-col gap-2 cursor-pointer">
            <img src={running} className="w-[320px]" />
            <span className="text-xl"> LifeStyle Running</span>
          </div>
        );
      })}
    </div>
  );
}
