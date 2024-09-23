import { atom } from "recoil";
interface Options {
  size: number;
  stock: number;
  isChecked: boolean;
}

interface ProductInfo {
  item_name: string;
  price: number | string;
  category_type: string;
  category_gender: string;
  description: string;
  item_image: string[];
}

export const productInfoAtom = atom<ProductInfo>({
  key: "productInfoAtom",
  default: {
    item_name: "",
    price: "",
    category_type: "",
    category_gender: "",
    description: "",
    item_image: [],
  },
});

export const productVariantAtom = atom<Options[]>({
  key: "productVariantAtom",
  default: [],
});
