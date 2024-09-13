import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddProductInfo() {
  const [images, setImages] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && images.length < 5) {
      setImages([...images, URL.createObjectURL(e.target.files[0])]);
    }
  };

  const handleImageDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">제품 정보</h1>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="제품명"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div>
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="mb-2"
          />
          <div className="flex flex-wrap gap-2 mb-2">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`제품 이미지 ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleImageDelete(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            최대 5개의 이미지를 업로드할 수 있습니다. (현재 {images.length}/5)
          </p>
        </div>

        <input
          type="number"
          placeholder="제품 가격"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="제품 설명"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>

        <select
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">카테고리 선택</option>
          <option value="sneakers">스니커즈</option>
          <option value="sandals">샌들</option>
          <option value="running">런닝</option>
          {/* 필요한 카테고리를 추가하세요 */}
        </select>

        <div className="space-y-2">
          <p className="font-medium">성별</p>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              남성
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              여성
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="kids"
                checked={gender === "kids"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              아동
            </label>
          </div>
        </div>

        <Link to={`/manage/add-variant`}>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            다음
          </button>
        </Link>
      </form>
    </div>
  );
}
