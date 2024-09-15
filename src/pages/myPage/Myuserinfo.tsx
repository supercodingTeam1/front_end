import defaultImg from '../../assets/DefaultUser.png'

const MyUser = () => {


  return (
    <>
      <div className="">
        <h3 className="text-2xl">반가워요! <span className="font-bold">이름님</span></h3>
        <div className="border rounded-md py-5 px-6 my-5 bg-gray-100 flex ">
            <div className="w-[80px] h-[80px] bg-white rounded-full mr-6  overflow-hidden cursor-pointer">
              <img src={defaultImg} alt="" className='w-full h-full object-cover'/>
            </div>
            <ul className="py-2">
              <li className="text-sm"> 계정 :  <span className='ml-2 '> uniend5959@gmail.com</span></li>
              <li className="text-sm"> 주소 : <span className='ml-2 '> 경기도 </span></li>
              <li className="text-sm"> 번호 : <span className='ml-2'>010-0000-0000</span></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default MyUser