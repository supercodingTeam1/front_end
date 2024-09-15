import { useState } from "react";
import AddProductInfo from "./AddProductInfo";
import AddProductVariant from "./AddProductVariant";

export interface IAddProductProps {}

export function AddProduct(props: IAddProductProps) {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <AddProductInfo nextPage={() => setStep(2)} />
      ) : (
        <AddProductVariant previousPage={() => setStep(1)} />
      )}
    </div>
  );
}
