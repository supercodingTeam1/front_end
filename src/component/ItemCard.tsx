import shoe from "../assets/shoe.png";

interface IOptionProps {
  option_id: number;
  option_name: string;
  stock: number;
}
interface IItemCardProps {
  item_id: number;
  category: "string";
  option: IOptionProps[];
  item_image: string;
  item_name: string;
  price: string;
}

export default function ItemCard(props: IItemCardProps) {
  return (
    <div className="w-[285px] flex flex-col bg-gray-100/50">
      <img src={shoe} className="w-full h-[285px]" />
      <div className="flex flex-col p-4 gap-4">
        <h1 className="text-2xl truncate">
          nike infinity run 4 djkjflksjflskjflsjkdlskjflksjdflksj
        </h1>
        <span className="text-gray-400">여성 스니커즈</span>
        <span className="text-xl">₩ 150,000</span>
      </div>
    </div>
  );
}
