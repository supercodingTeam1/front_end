import React, { useEffect, useState } from "react";
import { changeItemStock, getSellItems } from "../../api/manageProductApi";

interface Option {
  optionId: string;
  size: string;
  stock: number;
}
interface Category {
  category_gender: string;
  category_type: string;
}

interface Product {
  item_id: number;
  category: Category;
  options: Option[];
  item_image: string;
  item_name: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const res = await getSellItems();
      if (res.status === 200) {
        setProducts(res.allSalesItemDTOList);
      }
    } catch {
      console.log("errrrrrrr");
    }
  };

  const handleStockChange = async (optionId: string, newStock: number) => {
    await changeItemStock([{ optionId, newStock }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">제품 목록</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-black text-white">
            <th>이미지</th>
            <th>제품명</th>
            <th>카테고리</th>
            <th>가격</th>
            <th>옵션</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <React.Fragment key={product.item_id}>
              <tr className="border">
                <td>
                  <img
                    src={product.item_image}
                    alt={product.item_name}
                    className="w-20 h-20 object-cover rounded-md mx-auto"
                  />
                </td>
                <td>{product.item_name}</td>
                <td>
                  {product.category.category_gender}{" "}
                  {product.category.category_type}
                </td>
                <td>{product.price.toLocaleString()}원</td>
                <td>
                  <button
                    className="text-tahiti hover:text-blue-700"
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
                      {product.options.map((opt) => (
                        <div
                          key={opt.optionId}
                          className="flex items-center mb-2"
                        >
                          <span className="w-1/3">사이즈: {opt.size}</span>
                          <input
                            type="number"
                            defaultValue={opt.stock}
                            onChange={(e) =>
                              handleStockChange(
                                opt.optionId,
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
