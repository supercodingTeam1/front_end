

import defaultImg from "../../assets/DefaultUser.png";



const MyUser = ({ mydata }) => {






  if(!mydata || !mydata.user_info){
    return <div>아직 데이터가 없습니다. </div>
  }

  const {
    profile,
    email,
    user_address,
    phone_num,
    name,
  } = mydata.user_info


  return (
    <>
      {/* {JSON.stringify(mydata)} */}
      <div className="">
        <h3 className="text-2xl">
          반가워요! <span className="font-bold">{name}</span>
        </h3>
        <div className="border rounded-md py-5 px-6 my-5 flex ">
          <div className="w-[80px] h-[80px] bg-white rounded-full mr-6  overflow-hidden cursor-pointer">
            <img
              src={profile ? profile  : defaultImg}
              alt="유저이미지"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="py-2">
            <li className="text-sm">
              계정 : <span className="ml-2 "> {email}</span>
            </li>
            <li className="text-sm">
              주소 : <span className="ml-2 ">{user_address} </span>
            </li>
            <li className="text-sm">
              번호 : <span className="ml-2">{phone_num}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyUser;
