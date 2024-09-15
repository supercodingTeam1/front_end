import { atom } from "recoil";

interface Option {
  option_id: string;
  option_name: string;
  stock: number;
}

interface IProduct {
  item_id: number;
  category: string;
  option: Option[];
  item_image: string;
  item_name: string;
  price: number;
}
export const productAddAtom = atom({
  key: "productAdd",
  default: {},
});
