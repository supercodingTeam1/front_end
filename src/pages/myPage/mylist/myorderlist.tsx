import Button from "../../../component/Button"
import MyBosxItem from "./myBox"
import MyList from "./mylist"
import { Link } from "react-router-dom"

const MyOrderList = () => {
  return(
    <>
      <div className="">
      <div className="mb-5  flex items-center justify-between ">
          <p className="font-bold">나의 주문 목록</p>
          <Link to={'/mypage'}>
            <Button
            primary={true}
            className="w-[80px] h-[36px] py-1.5 text-sm bg-indigo-200 border border-black rounded-3xl text-center">back</Button>
          </Link>
        </div>
        <MyList/>
        <MyBosxItem/>
      </div>
    </>
  )
}

export default MyOrderList