import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import MyContent from "./mycontent";
import MxLayout from "../../layout/MxLayout";
import { useEffect, useState } from "react";
import { mypageUser } from "../../api/mypageApi";
import { useRecoilValue } from "recoil";
import { AuthAtom } from "../../recoil/user/userAtom";

export type userData = {
  name: string;
  roles: string[];
  user_id: number;
};

const Mypage = () => {
  
  const [mydata, setMydata] = useState<userData | null>(null);
  const role = useRecoilValue(AuthAtom).role
  const location = useLocation();
  const navigate = useNavigate();

  const moveAdd = () => {
    navigate("/manage");
  };

  const handlecheckseller = () => {
    if(role  === 'ROLE_SELLER'){
      moveAdd()
    }else{
      alert('판매권한이 없습니다. ')
    }

  }
  const userData = async () => {
    try {
      const res = await mypageUser();
      console.log(res.MyUserInfo.data);
      setMydata(res.MyUserInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    userData();
  }, [location.pathname]);

  return (
    <>
      <MxLayout>
        <div className="flex gap-10 overflow-hidden">
          <div className="h-full w-[260px]  rounded-md border border-black border-solid">
            <div className="flex-1 flex-col ">
              <h2 className=" px-4 bg-gray-light py-5 rounded-t-md  border-b border-black border-solid text-xl uppercase font-bold">
                menu
              </h2>
              <nav className="py-6">
                <span className="block pb-2 px-4 text-xs  text-gray-400 ">
                  자주찾는 메뉴
                </span>
                <ul className="cursor-pointer ">
                  <li className=" py-3 px-4 h-12 leading-12 transition duration-200 ">
                    내정보수정
                  </li>
                  <li className=" py-3 px-4 h-12 leading-12 transition duration-200 ">
                    <NavLink to={"orderlist"}>주문리스트</NavLink>
                  </li>
                  <li
                    className="py-3 px-4 h-12 leading-12 transition duration-200"
                    onClick={handlecheckseller}
                  >
                    물품등록하기
                  </li>
                  <li className="py-3 px-4 h-12 leading-12 transition duration-200 ">
                    회원탈퇴
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="ml-15 flex-1">
            {location.pathname === "/mypage" ? (
              <MyContent mydata={mydata} />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </MxLayout>
    </>
  );
};

export default Mypage;
