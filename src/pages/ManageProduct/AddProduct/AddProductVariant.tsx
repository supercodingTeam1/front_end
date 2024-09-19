import { useState } from "react";
import Published from "../../../assets/published.png";
import Button from "../../../component/Button";
import { useLocation, useNavigate } from "react-router-dom";

interface IAddProductVariantProps {}

export default function AddProductVariant(props: IAddProductVariantProps) {
  const navigate = useNavigate();
  const sizes = [
    220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
    295, 300,
  ];
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [inventory, setInventory] = useState<{ [key: number]: number }>({});
  const [showModal, setShowModal] = useState(false);

  const handleSizeToggle = (size: number) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleInventoryChange = (size: number, value: string) => {
    setInventory((prev) => ({ ...prev, [size]: parseInt(value) || 0 }));
  };

  const handlePublish = () => {
    console.log("선택된 사이즈:", selectedSizes);
    console.log("재고:", inventory);
    // 여기에 게시 로직 추가
    setShowModal(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-center items-center mb-6">
        <img src={step2} alt="step2" className="w-2/3" />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">사이즈 선택 및 재고 입력</h2>
        <div className="grid grid-cols-2 gap-4">
          {sizes.map((size, index) => (
            <div key={size} className="flex items-center">
              <input
                type="checkbox"
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeToggle(size)}
                className="mr-2"
              />
              <label htmlFor={`size-${size}`} className="mr-4">
                {size}
              </label>
              <input
                type="number"
                value={inventory[size] || ""}
                onChange={(e) => handleInventoryChange(size, e.target.value)}
                min="0"
                className="border rounded px-2 py-1 w-24"
                placeholder="재고"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 space-x-4">
        <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
        <Button onClick={handlePublish} primary>
          게시
        </Button>
      </div>

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
            <Button onClick={() => setShowModal(false)} primary>
              확인
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
