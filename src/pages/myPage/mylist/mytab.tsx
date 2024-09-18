import { NavLink } from "react-router-dom"







const MyTab = () => {


  return (
    <>
      <div className="bg-indigo-100 py-5 px-6 w-full mb-8">
        <div className="flex justify-between items-center">
          <ul className="flex gap-5  cursor-pointer ">
            <li className="w-[80px] h-[36px] py-1.5 text-sm bg-indigo-200 border border-black rounded-3xl text-center">
              <NavLink to={'orderlist'}>주문목록</NavLink>
            </li>
            <li className="w-[80px] h-[36px] py-1.5 text-sm bg-indigo-200  border border-black rounded-3xl  text-center">
              <NavLink to={'saleslist'}>판매목록</NavLink>
            </li>
          </ul>
          <span className="block text-xs cursor-pointer">|  최신순  </span>
        </div>
      
      </div>
    </>
  )
}

export default MyTab