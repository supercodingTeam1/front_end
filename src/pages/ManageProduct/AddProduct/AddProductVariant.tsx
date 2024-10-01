import { useState } from "react";
import Published from "../../../assets/published.png";
import Button from "../../../component/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  productInfoAtom,
  productVariantAtom,
} from "../../../recoil/uploadProduct/atom";
import VariantSet from "./VariantSet";
import { uploadProduct } from "../../../api/manageProductApi.js";

const sizes = [
  220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
  295, 300,
];

export default function AddProductVariant() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const productVariant = useRecoilValue(productVariantAtom);
  const productInfo = useRecoilValue(productInfoAtom);

  const handlePublish = async () => {
    const checkedVariant = productVariant.filter((v) => v.isChecked === true);

    if (checkedVariant.length === 0) {
      return;
    } else {
      const formData = new FormData();
      productInfo.item_image.forEach((img) => {
        formData.append("item_image", img);
      });

      const data = { ...productInfo, options: checkedVariant };
      formData.append("request", JSON.stringify(data));

      // request
      try {
        const res = await uploadProduct(formData);
        if (res.status === 200) setShowModal(true);
      } catch {
      } finally {
      }
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/manage");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="flex justify-center items-center mb-6 text-2xl">STEP 2</h1>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-8">
          {sizes.map((size) => (
            <div key={size}>
              <VariantSet size={size} />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
          <Button onClick={handlePublish} primary>
            게시
          </Button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <img
              src={Published}
              alt="Published"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-2xl font-bold mb-4">게시 성공!</h2>
            <p className="mb-4">상품이 성공적으로 게시되었습니다.</p>
            <Button onClick={handleConfirm} primary>
              확인
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
