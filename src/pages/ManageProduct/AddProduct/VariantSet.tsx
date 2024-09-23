import * as React from "react";
import { useRecoilState } from "recoil";
import { productVariantAtom } from "../../../recoil/uploadProduct/atom";

export interface IVariantSetProps {
  size: number;
}

export default function VariantSet(props: IVariantSetProps) {
  const size = props.size;
  const [checked, setChecked] = React.useState(false);

  const [productVariant, setProductVariant] =
    useRecoilState(productVariantAtom);

  const thisVariant = productVariant.filter((v) => v.size === size)[0];

  const handleSizeToggle = (e: { target: { checked: boolean } }) => {
    const isChecked = e.target.checked;

    setChecked(isChecked); // 체크 상태 설정

    setProductVariant((old) => {
      const existingVariant = old.find((variant) => variant.size === size);

      if (isChecked) {
        // 체크된 경우, 사이즈 객체를 생성하고 초기 재고값을 0으로 설정
        if (!existingVariant) {
          return [...old, { size, stock: 1, isChecked: true }];
        } else {
          // 이미 존재하는 사이즈가 있다면 isChecked만 true로 업데이트
          return old.map((variant) =>
            variant.size === size ? { ...variant, isChecked: true } : variant
          );
        }
      } else {
        // 체크 해제된 경우, isChecked만 false로 설정
        return old.map((variant) =>
          variant.size === size ? { ...variant, isChecked: false } : variant
        );
      }
    });
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStock = parseInt(e.target.value);
    setProductVariant((prev) => {
      return prev.map((variant) =>
        variant.size === size ? { ...variant, stock: newStock } : variant
      );
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        id={`size-${size}`}
        onChange={handleSizeToggle}
        className="mr-2"
        defaultChecked={thisVariant?.isChecked}
      />
      <label htmlFor={`size-${size}`} className="mr-4">
        {size}
      </label>
      <input
        type="number"
        onChange={handleStockChange}
        min="1"
        max="20"
        className="border rounded px-2 py-1 w-24"
        placeholder="재고"
        disabled={!checked}
        defaultValue={thisVariant?.stock}
      />
    </div>
  );
}
