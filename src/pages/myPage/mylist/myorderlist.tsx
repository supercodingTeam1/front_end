import { useEffect, useState } from "react";
import Button from "../../../component/Button";
import MyBosxItem from "./myBox";
import MyList from "./mylist";
import { Link } from "react-router-dom";
import { myOrderApi } from "../../../api/mypageApi";


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
  useEffect(() => {
    const orderlist = async () => {
      const res = await myOrderApi()
      console.log(res)
      setOrderList(res.data)
    }

    orderlist()
  },[]);  

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
        <MyList orderlist={orderlist}/>
        {orderlist.map((item, index) => 
          <MyBosxItem orderlist={item} key={index} />
        )}
        {/* <MyBosxItem orderlist={orderlist}/> */}
      </div>
    </>
  );
};

export default MyOrderList;
