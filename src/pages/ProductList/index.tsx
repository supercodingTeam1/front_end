import * as React from "react";
import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";
// import Pagination from "../../component/Pagination";
import CardFilter from "../CardFilter";
import { getItemList } from "../../api/productApi";
import PreparingItem from "../PreparingItem";

export interface IProductListProps {}

export default function ProductList() {
  const [page, _] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  const [sizeFilter, setSizeFilter] = React.useState();
  const [orderFilter, setOrderFilter] = React.useState("asc");
  const [sort ]= React.useState('price') ;
  const shoeSizes = [210, 220, 230, 240, 250, 260, 270, 280, 290];

  React.useEffect(() => {
    getItems();
  }, [ sizeFilter, orderFilter]);

  const getItems = async () => {
    try {
      const res = await getItemList(
        {
          page: page, 
          size: 100, 
          optionSize : sizeFilter !== 'all' ? sizeFilter : undefined,
          order : orderFilter,
          sort :sort
        });
      console.log(res)
      setProducts(res.items.content);
    } catch {
      console.log("errr");
    }
  };

  return (
    <div>
      {/* filter */}
      <CardFilter 
        shoeSizes={shoeSizes}
        setSizeFilter={setSizeFilter}
        setOrderFilter={setOrderFilter}
      />
      <MxLayout>
        {/* list */}
        {products.length > 0 ? (
          <div className="flex flex-wrap gap-x-3 gap-y-6">
            {products.map((product) => {
              return <ItemCard product={product} />;
            })}
          </div>
        ) : (
          <PreparingItem/>
        )}


        
        {/* pagination */}
        <div className="my-10">{/* <Pagination /> */}</div>
      </MxLayout>
    </div>
  );
}
