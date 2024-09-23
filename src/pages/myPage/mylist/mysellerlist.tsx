import MyList from "./mylist"
import MyBosxItem from "./myBox"
import { Link } from "react-router-dom"

const MySellerList = () => {
  return(
    <>
      <div className="">
        <div className="mb-5  flex items-center justify-between ">
          <p className="font-bold">나의 판매 목록</p>
          <Link to={'/mypage'}><button className="w-[80px] h-[36px] py-1.5 text-sm bg-indigo-200 border border-black rounded-3xl text-center">돌아가기</button></Link>
        </div>
        <MyList/>
        <MyBosxItem/>
      </div>
    </>
  )
}

export default MySellerList