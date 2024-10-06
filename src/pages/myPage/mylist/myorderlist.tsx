import { useEffect, useState } from "react";
import Button from "../../../component/Button";
import MyBosxItem from "./myBox";
import MyList from "./mylist";
import { Link } from "react-router-dom";
import { myOrderApi } from "../../../api/mypageApi";
import MypageNation from "../pagenation";


export type UserOrder = {
  order_num: string;
  order_at: string; // ISO 8601 형식의 날짜 문자열
  address: string;
  phone_num: string;
  myBuyItemDetailDTOList: MyBuyItemDetailDTO[];
};

export type MyBuyItemDetailDTO = {
  order_id: number;
  item_image: string;
  item_name: string;
  price: string; // 가격을 문자열로 유지
  myBuyItemOptionDetailDTOList: MyBuyItemOptionDetailDTO[];
};

export type MyBuyItemOptionDetailDTO = {
  option_id: number;
  size: number;
  quantity: number;
};


const MyOrderList = () => {
  const [orderlist, setOrderList] = useState<UserOrder[]>([])
  const [currentPage , setCurrentPage] = useState(1)
  const itemperPage = 5; 

  useEffect(() => {
    const orderlist = async () => {
      const res = await myOrderApi()
      console.log(res)
      setOrderList(res.data)
    }

    orderlist()
  },[]);  

  const totalPage = Math.ceil(orderlist.length / itemperPage)
  const startIndex = (currentPage - 1) * itemperPage;
  const currentOrders = orderlist.slice(startIndex, startIndex + itemperPage);
  return (
    <>
      <div className="">
        <div className="mb-5  flex items-center justify-between ">
          <p className="font-bold">나의 주문 목록</p>
          <Link to={"/mypage"}>
            <Button
              primary={true}
              className="w-[80px] h-[36px] py-1.5 text-sm bg-indigo-200 border border-black rounded-3xl text-center"
            >
              back
            </Button>
          </Link>
        </div>
        <MyList orderlist={currentOrders}/>
        {currentOrders.map((item, index) => 
          <MyBosxItem orderlist={item} key={index} />
        )}
        <MypageNation
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          totalPage = {totalPage}
        />
      </div>

    </>
  );
};

export default MyOrderList;
