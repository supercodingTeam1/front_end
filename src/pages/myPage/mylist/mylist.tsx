import MyBosxItem from "./myBox"




const MyList = () => {


  return (
    <>
      <div className="border-t border-black pt-5">
        <p className="mb-5 font-bold">주문목록   또는 판매내역 </p>
        <div className="">
          <div className="bg-indigo-100 py-4 px-6">
            <ul className="flex justify-around">
              <li className="">주문번호</li>
              <li className="">이미지</li>
              <li className=""> 이름/옵션</li>
              <li className="">주문가격/수량</li>
              <li className="">주소</li>
            </ul>
          </div>
        </div>
        <MyBosxItem/>
      </div>
    </>
  )
}

export default MyList