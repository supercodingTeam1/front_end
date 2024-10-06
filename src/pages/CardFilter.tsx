import { useContext, useState } from "react";
import Button from "../component/Button";
import MxLayout from "../layout/MxLayout";
import { FilterContext } from "./ProductList/index";

const CardFilter = ({ shoeSizes, setSizeFilter }) => {
  const context = useContext(FilterContext);
  const { setSort, orderFilter, setOrderFilter } = context;
  const [currentSize, setCurrentSize] = useState(null);
  const handleClickSize = (size) => {
    setSizeFilter(size);
    setCurrentSize(size);
  };
  const handleClickAll = () => {
    setCurrentSize(null);
    setSizeFilter("");
  };


  const onClickAsc = () => {
    if (orderFilter !== "desc") {
      setSort((prev) => (prev === "price" ? "" : "price"));
    }
    setOrderFilter((prev) => (prev === "asc" ? "" : "asc"));
  };
  const onClickDesc = () => {
    if (orderFilter !== "asc") {
      setSort((prev) => (prev === "price" ? "" : "price"));
    }
    setOrderFilter((prev) => (prev === "desc" ? "" : "desc"));
  };
  return (

    <>
      <MxLayout>
        <div className="flex  items-center justify-between">
          <div className="">
            <label htmlFor="sizeFilter"></label>
            {/* <select
              name="sizeFilter"
              id="sizeFilter"
              onChange={(e) => {
                setSizeFilter(e.target.value);
              }}
            >
              <option value="all">전체</option>
              {shoeSizes.map((size) => (
                <option key={size} value={size.toString()}>
                  {size}
                </option>
              ))}
            </select> */}
            <div className="flex gap-2 w-[900px] flex-wrap">
              <Button
                onClick={handleClickAll}
                className="rounded-md mr-2"
                primary={currentSize === null}
              >
                전체
              </Button>
              {shoeSizes.map((size) => {
                return (
                  <Button
                    primary={currentSize === size}
                    onClick={() => handleClickSize(size)}
                    className="rounded-md mr-2"
                  >
                    {size}
                  </Button>
                );
              })}
            </div>
          </div>
          <ul className="flex cursor-pointer">
            <Button
              type="button"
              primary={orderFilter === "asc" ? true : false}
              onClick={onClickAsc}
            >
              낮은순
            </Button>
            <Button
              type="button"
              primary={orderFilter === "desc" ? true : false}
              onClick={onClickDesc}
              className=" ml-4"
            >
              높은순
            </Button>
          </ul>
        </div>
      </MxLayout>
    </>
  );
};

export default CardFilter;
