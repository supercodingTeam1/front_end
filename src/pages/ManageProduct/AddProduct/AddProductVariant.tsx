import React, { useState } from "react";

export default function AddProductVariant() {
  const sizes = [230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340];
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [inventory, setInventory] = useState<{ [key: number]: number }>({});

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
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        뒤로 가기
      </button>
      <h1 className="text-2xl font-bold mb-6">제품 옵션 추가</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">사이즈 선택</h2>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`px-4 py-2 rounded ${
                selectedSizes.includes(size)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">재고 입력</h2>
        <div className="space-y-2">
          {selectedSizes.map((size) => (
            <div key={size} className="flex items-center">
              <label className="w-24">사이즈 {size}:</label>
              <input
                type="number"
                value={inventory[size] || ""}
                onChange={(e) => handleInventoryChange(size, e.target.value)}
                min="0"
                className="border rounded px-2 py-1 w-24"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePublish}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        게시
      </button>
    </div>
  );
}
