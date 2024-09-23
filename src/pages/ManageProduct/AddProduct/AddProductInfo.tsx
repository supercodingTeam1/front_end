import * as React from "react";
import { useState } from "react";
import Button from "../../../component/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productInfoAtom } from "../../../recoil/uploadProduct/atom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { infoValidation } from "./validation";

export interface IProductInfo {
  item_name: string;
  price: number;
  category_type: string;
  category_gender: string;
  description: string;
}

// 다음 페이지 버튼 클릭시 필드값 전역상태에 저장
// add variant 페이지에서 뒤로가기로 다시 이 페이지 진입시 전역상태 값을 읽고 default 값으로 설정.

export default function AddProductInfo() {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [productInfo, setProductInfo] = useRecoilState(productInfoAtom);

  React.useEffect(() => {
    setImages(productInfo.item_image);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProductInfo>({
    mode: "onChange",
    resolver: yupResolver(infoValidation),
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && images.length < 5) {
      setImages([...images, URL.createObjectURL(e.target.files[0])]);
    }
  };

  const handleImageDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleNext = (data: IProductInfo) => {
    setProductInfo({ ...data, item_image: images });
    navigate("/manage/add/variant");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {JSON.stringify(productInfo)}
      <h1 className="flex justify-center items-center mb-6 text-2xl">STEP 1</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleNext)}>
        <input
          {...register("item_name")}
          defaultValue={productInfo.item_name}
          type="text"
          placeholder="제품명"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tahiti"
        />
        <p className="text-tahiti text-sm">{errors.item_name?.message}</p>
        <input
          {...register("price")}
          defaultValue={productInfo.price}
          type="number"
          placeholder="제품 가격"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tahiti"
        />
        <p className="text-tahiti text-sm">{errors.price?.message}</p>
        {/* image */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="image-upload"
            className="bg-[#000] text-white w-[100px] flex items-center justify-center py-2 rounded-full cursor-pointer"
          >
            이미지 선택
          </label>

          <input
            id="image-upload"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
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
                  className="absolute -top-1 -right-1 bg-tahiti text-white rounded-full w-5 h-5 flex items-center justify-center"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            최대 5개의 이미지를 업로드할 수 있습니다. (현재 {images.length}/5)
          </p>
          {images.length === 0 && (
            <p className="text-tahiti text-sm">이미지를 선택해 주세요</p>
          )}
        </div>
        {/* description */}
        <textarea
          {...register("description")}
          defaultValue={productInfo.description}
          placeholder="제품 설명"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tahiti h-32"
        ></textarea>
        <p className="text-tahiti text-sm">{errors.description?.message}</p>

        <select
          {...register("category_type")}
          defaultValue={productInfo.category_type}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tahiti"
        >
          <option value="">카테고리 선택</option>
          <option value="sneakers">스니커즈</option>
          <option value="sandals">샌들</option>
          <option value="running">런닝</option>
        </select>
        <p className="text-tahiti text-sm">{errors.category_type?.message}</p>

        <fieldset className="flex gap-4">
          <label className="flex items-center">
            <input
              {...register("category_gender")}
              defaultChecked={productInfo.category_gender === "male"}
              type="radio"
              value="male"
              className="mr-2"
            />
            남성
          </label>

          <label className="flex items-center">
            <input
              {...register("category_gender")}
              defaultChecked={productInfo.category_gender === "female"}
              type="radio"
              value="female"
              className="mr-2"
            />
            여성
          </label>
          <label className="flex items-center">
            <input
              {...register("category_gender")}
              defaultChecked={productInfo.category_gender === "kids"}
              type="radio"
              value="kids"
              className="mr-2"
            />
            아동
          </label>
          <p className="text-tahiti text-sm">
            {errors.category_gender?.message}
          </p>
        </fieldset>
        <Button primary type="submit">
          다음
        </Button>
      </form>
    </div>
  );
}
