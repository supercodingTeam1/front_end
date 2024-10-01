
import defaultImg from '../../../assets/DefaultUser.png'




const MyBosxItem = () => {


  return (
    <>
      <div className="border py-5 px-6 my-2 cursor-pointer">
        <div className="flex justify-around">
        <div className="text-center ">
          <strong className="block">번호</strong>
          <span className='text-xs'>시기</span>
        </div>
        <div className="w-[60px] h-[60px] ">
          <img src={defaultImg} alt="이미지"  className=''/>
        </div>
        <div className="text-center">
            <strong className="block">이름</strong>
            <span className='text-xs '>옵션</span>
        </div>
        <div className="text-center">
        <strong className="block">가격</strong>
        <span className='text-xs '>수량</span>
        </div>
        <div className="">
          <p>주소</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default MyBosxItem