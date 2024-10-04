import { useEffect, useState } from "react";
import Button from "../../../component/Button";
import MyBosxItem from "./myBox";
import MyList from "./mylist";
import { Link } from "react-router-dom";
import { myOrderApi } from "../../../api/mypageApi";

const MyOrderList = () => {
  const [orderlist, setOrderList] = useState()
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
      {JSON.stringify(orderlist)}
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
        <MyList />
        {/* {orderlist.map((item, index) => {
          <MyBosxItem />
        })} */}
        <MyBosxItem />
      </div>
    </>
  );
};

export default MyOrderList;
