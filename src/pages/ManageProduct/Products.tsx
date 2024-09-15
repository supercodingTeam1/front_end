import React, { useState } from "react";

interface Option {
  option_id: string;
  option_name: string;
  stock: number;
}

interface Product {
  item_id: number;
  category: string;
  option: Option[];
  item_image: string;
  item_name: string;
  price: number;
}

const productsData: Product[] = [
  {
    item_id: 1,
    category: "스니커즈",
    option: [
      { option_id: "a1", option_name: "240", stock: 100 },
      { option_id: "a2", option_name: "235", stock: 80 },
      { option_id: "a3", option_name: "250", stock: 120 },
    ],
    item_image: "https://example.com/sneakers1.jpg",
    item_name: "나이키 에어맥스 90",
    price: 129000,
  },
  {
    item_id: 2,
    category: "부츠",
    option: [
      { option_id: "b1", option_name: "240", stock: 50 },
      { option_id: "b2", option_name: "250", stock: 70 },
    ],
    item_image: "https://example.com/boots1.jpg",
    item_name: "팀버랜드 클래식 부츠",
    price: 219000,
  },
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const handleStockChange = (
    productId: number,
    optionId: string,
    newStock: number
  ) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.item_id === productId
          ? {
              ...product,
              option: product.option.map((opt) =>
                opt.option_id === optionId ? { ...opt, stock: newStock } : opt
              ),
            }
          : product
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">제품 목록</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">이미지</th>
            <th className="border p-2">제품명</th>
            <th className="border p-2">카테고리</th>
            <th className="border p-2">가격</th>
            <th className="border p-2">옵션</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <React.Fragment key={product.item_id}>
              <tr className="border">
                <td className="border p-2">
                  <img
                    src={product.item_image}
                    alt={product.item_name}
                    className="w-20 h-20 object-cover rounded-md mx-auto"
                  />
                </td>
                <td className="border p-2">{product.item_name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">
                  {product.price.toLocaleString()}원
                </td>
                <td className="border p-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() =>
                      setExpandedProduct(
                        expandedProduct === product.item_id
                          ? null
                          : product.item_id
                      )
                    }
                  >
                    {expandedProduct === product.item_id
                      ? "옵션 접기"
                      : "옵션 펼치기"}
                  </button>
                </td>
              </tr>
              {expandedProduct === product.item_id && (
                <tr>
                  <td colSpan={5} className="border p-2">
                    <div className="mt-2">
                      {product.option.map((opt) => (
                        <div
                          key={opt.option_id}
                          className="flex items-center mb-2"
                        >
                          <span className="w-1/3">{opt.option_name}</span>
                          <input
                            type="number"
                            value={opt.stock}
                            onChange={(e) =>
                              handleStockChange(
                                product.item_id,
                                opt.option_id,
                                parseInt(e.target.value)
                              )
                            }
                            className="w-20 px-2 py-1 border rounded"
                            min="0"
                          />
                          <span className="ml-2">개</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
