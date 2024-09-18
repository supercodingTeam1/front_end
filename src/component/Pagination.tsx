import ReactPaginate from "react-paginate";

export interface IPaginationProps {
  onChange: () => void;
  total: number;
}

export default function Pagination(props: IPaginationProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={props.onChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={10}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={"flex justify-center items-center space-x-2"}
      pageClassName={"px-4 py-2 border rounded  cursor-pointer"}
      activeClassName={"bg-blue-500 text-white"}
      previousClassName={
        "px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
      }
      nextClassName={
        "px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
      }
      breakClassName={
        "px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
      }
    />
  );
}
