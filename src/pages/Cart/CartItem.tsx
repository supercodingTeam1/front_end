import * as React from "react";

export interface ICartItemProps {}

export default function CartItem({
  cart_id,
  item_image,
  item_name,
  size,
  quantity,
  price,
}: ICartItemProps) {
  const [itemQuantity, setItemQuantity] = React.useState(quantity);
  return (
    <div
      className="flex items-center overflow-x-auto mb-4 border-b border-black"
      key={cart_id}
    >
      <div className="w-2/5 flex items-center justify-center">
        <img src={item_image} className="w-[100px] h-[100px] mr-4" />
        <div className="flex flex-col">
          <div>{item_name}</div>
          <div className="text-gray">사이즈: {size}</div>
        </div>
      </div>
      <div className="w-1/5 text-center">₩ {price.toLocaleString()}</div>
      {/* quantity */}
      <div className="w-1/5 flex justify-center">
        <button
          onClick={() => setItemQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="border border-gray rounded flex w-6 justify-center mx-2">
          {itemQuantity}
        </span>
        <button onClick={() => setItemQuantity((prev) => prev + 1)}>+</button>
      </div>

      <div className="w-1/5 flex justify-center">
        ₩ {price * itemQuantity}
        <div
          className="w-[20px] h-[20px] cursor-pointer translate-x-4"
          //   onClick={handleDelete}
        >
          X
        </div>
      </div>
    </div>
  );
}
