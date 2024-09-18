import { Link } from "react-router-dom";
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

export default function ItemCard({ props }: IItemCardProps) {
  return (
    <Link to="detail/1">
      <div className="w-[200px] lg:w-[285px] flex flex-col bg-gray-100/50 cursor-pointer">
        <img src={shoe} className="w-full h-[200px] lg:h-[285px]" />
        <div className="flex flex-col p-4 gap-4">
          <h1 className="text-sm md:text-md xl:text-2xl truncate">
            nike infinity run 4 djkjflksjflskjflsjkdlskjflksjdflksj
          </h1>
          <span className="text-xs md:text-sm xl:text-base text-gray-400">
            여성 스니커즈
          </span>
          <span className="text-xs md:text-base xl:text-xl">₩ 150,000</span>
        </div>
      </div>
    </Link>
  );
}
