import ReactPaginate from "react-paginate";

export interface IPaginationProps {
  onChange: () => void;
  total: number;
}

export default function Pagination(props: IPaginationProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={props.onChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={10}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={"flex justify-center items-center space-x-2"}
      pageClassName={"px-3 py-1 border  cursor-pointer active:opacity-50"}
      activeClassName={"bg-black text-white active:opacity-50"}
      previousClassName={
        "px-3 py-1 border rounded bg-black text-white hover:bg-gray cursor-pointer"
      }
      nextClassName={
        "px-3 py-1 border rounded bg-black text-white hover:bg-gray cursor-pointer"
      }
      breakClassName={"px-3 py-1 hover:text-gray cursor-pointer"}
    />
  );
}
