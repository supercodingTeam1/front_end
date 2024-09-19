import * as React from "react";
import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";
import Pagination from "../../component/Pagination";
import CardFilter from "../CardFilter";

export interface IProductListProps {}

export default function ProductList(props: IProductListProps) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shoeSizes = [210,220, 230, 240, 250, 260, 270, 280,290];

  return (
    <div>
      {/* filter */}
      {/* <div className="bg-yellow-100">필터</div> */}
      <CardFilter shoeSizes={shoeSizes}/>
      <MxLayout>
        {/* list */}
        <div className="flex  flex-wrap gap-x-3 gap-y-6">
          {products.map((item) => {
            return <ItemCard />;
          })}
        </div>
        {/* pagination */}
        <div className="my-10">
          <Pagination />
        </div>
      </MxLayout>
    </div>
  );
}
