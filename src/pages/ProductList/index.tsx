import * as React from "react";
import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";

export interface IProductListProps {}

export default function ProductList(props: IProductListProps) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {/* filter */}
      <div className="bg-yellow-100">필터</div>
      <MxLayout>
        {/* list */}
        <div className="flex  flex-wrap gap-x-3 gap-y-6">
          {products.map((item) => {
            return <ItemCard />;
          })}
        </div>
        {/* pagination */}
        <div className="bg-yellow-100">페이지네이션</div>
      </MxLayout>
    </div>
  );
}
