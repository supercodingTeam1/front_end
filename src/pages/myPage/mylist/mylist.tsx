import { useLocation } from "react-router-dom";
import MyBosxItem from "./myBox";

const MyList = ({ orderlist  }) => {
  const location = useLocation();
  return (
    <>
      <div className="border-t border-black pt-5">
        <p className="mb-5 font-bold">
          {location.pathname === "/mypage" ? "주문내역" : ""}
        </p>
        <div className="">
          <div className="bg-gray-light py-4 px-6">
            <ul className="flex justify-around">
              <li className="">주문번호</li>
              <li className="">이미지</li>
              <li className="">이름/가격</li>
              <li className="">옵션/수량</li>
              <li className="">주소</li>
            </ul>
          </div>
        </div>
        {location.pathname === "/mypage"
          ? orderlist.map((item) => (
              <MyBosxItem key={item.order_num} orderlist={item} />
            ))
          : ""}
      </div>
    </>
  );
};

export default MyList;
