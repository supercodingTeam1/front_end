import * as React from "react";
import ItemCard from "../../component/ItemCard";
import MxLayout from "../../layout/MxLayout";
// import Pagination from "../../component/Pagination";
import CardFilter from "../CardFilter";
import { getItemList } from "../../api/productApi";
import PreparingItem from "../PreparingItem";
import Button from "../../component/Button";

export interface IProductListProps {}
interface FilterContextType {
  sort: string; // 또는 적절한 타입
  setSort: React.Dispatch<React.SetStateAction<string>>;
  orderFilter: string;
  setOrderFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterContext = React.createContext<FilterContextType>({
  sort: "",
  setSort: () => {},
  orderFilter: "",
  setOrderFilter: () => {},
});
//사이즈변경 -> 페이지 1 부터
//가격순 -> 페이지 1부터
// 카테고리변경없음
// 페이지 변경 concat
export default function ProductList() {
  const [page, setPage] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  const [sizeFilter, setSizeFilter] = React.useState();
  const [orderFilter, setOrderFilter] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState(1);
  const shoeSizes = [
    220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
    295, 300,
  ];
  const filterQuery = {
    page: 1,
    size: 8,
    optionSize: sizeFilter !== "all" ? sizeFilter : undefined,
    order: orderFilter,
    sort: sort,
  };

  React.useEffect(() => {
    setPage(1);
    getItems();
  }, [sizeFilter, orderFilter]);

  const getItems = async () => {
    try {
      setIsLoading(true);
      const res = await getItemList(filterQuery);
      if (res.status === 200) {
        setProducts(res.items.content);
        setTotalPage(res.items.page.totalPages);
      }
    } catch {
      console.log("errr");
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreItem = async () => {
    try {
      setIsLoading(true);
      const res = await getItemList({ ...filterQuery, page: page });
      if (res.status === 200) {
        setProducts((prev) => prev.concat(res.items.content));
      }
    } catch {
      console.log("errr");
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    if (page === 1) return;
    console.log("page next");
    getMoreItem();
  }, [page]);

  return (
    <div>
      {/* filter */}

      <FilterContext.Provider
        value={{ sort, setSort, orderFilter, setOrderFilter }}
      >
        <CardFilter shoeSizes={shoeSizes} setSizeFilter={setSizeFilter} />
      </FilterContext.Provider>
      <MxLayout>
        {/* list */}
        {products.length > 0 ? (
          <div className="flex flex-wrap gap-x-3 gap-y-6">
            {products.map((product) => {
              return <ItemCard product={product} />;
            })}
          </div>
        ) : (
          <PreparingItem />
        )}

        {/* pagination */}
        <div className="my-10">{/* <Pagination /> */}</div>
        {totalPage === page || totalPage === 0 ? (
          <div className="w-full flex justify-center text-gray">-The End-</div>
        ) : (
          <Button
            className="w-full rounded-md"
            onClick={() => setPage((prev) => prev + 1)}
          >
            {isLoading ? "Loading..." : "더보기"}{" "}
          </Button>
        )}
      </MxLayout>
    </div>
  );
}
export { FilterContext };
