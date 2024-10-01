import { Link } from "react-router-dom";

interface IOptionProps {
  option_id: number;
  option_name: string;
  stock: number;
}
interface Categorys {
  categoryGender: string;
  categoryId: number;
  categoryType: string;
}
interface IItemCardProps {
  item_id: number;
  category: Categorys;
  option: IOptionProps[];
  item_image: string;
  item_name: string;
  price: string;
}

export default function ItemCard({ product }: { product: IItemCardProps }) {
  return (
    <Link to={`/detail/${product.item_id}`}>
      <div className="w-[200px] lg:w-[285px] flex flex-col bg-gray-100/50 cursor-pointer">
        <img
          src={product.item_image}
          className="w-full h-[200px] lg:h-[285px]"
        />
        <div className="flex flex-col p-4 gap-4">
          <h1 className="text-sm md:text-md xl:text-2xl truncate">
            {product.item_name}
          </h1>
          <span className="text-xs md:text-sm xl:text-base text-gray-400">
            {product.category.categoryGender}
            {product.category.categoryType}
          </span>
          <span className="text-xs md:text-base xl:text-xl">
            ₩ {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
