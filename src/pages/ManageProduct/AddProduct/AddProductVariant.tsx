import { useState } from "react";
import step2 from "../../../assets/step2.png";
import Published from "../../../assets/published.png";

export default function AddProductVariant() {
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
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 "
        >
          뒤로 가기
        </button>
        <button
          onClick={handlePublish}
          type="submit"
          className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 "
        >
          게시
        </button>
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
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
