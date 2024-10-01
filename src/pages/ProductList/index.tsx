import * as React from "react";
import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";
// import Pagination from "../../component/Pagination";
import CardFilter from "../CardFilter";
import { getItemList } from "../../api/productApi";

export interface IProductListProps {}

export default function ProductList() {
  const [page, _] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  const shoeSizes = [210, 220, 230, 240, 250, 260, 270, 280, 290];

  React.useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    try {
      const res = await getItemList({ page: page, size: 100 });
      setProducts(res.items.content);
    } catch {
      console.log("errr");
    }
  };

  return (
    <div>
      {/* filter */}
      <CardFilter shoeSizes={shoeSizes} />
      <MxLayout>
        {/* list */}
        <div className="flex  flex-wrap gap-x-3 gap-y-6">
          {products.map((product) => {
            return <ItemCard product={product} />;
          })}
        </div>
        {/* pagination */}
        <div className="my-10">{/* <Pagination /> */}</div>
      </MxLayout>
    </div>
  );
}
