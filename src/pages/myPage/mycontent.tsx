import MyList from "./mylist/mylist"
import MyTab from "./mylist/mytab"
import MyUser from "./Myuserinfo"





const MyContent = () => {


  return (
    <>
      <div className="py-5">
        <MyUser/>
        <div className="w-full ">
            <MyTab />
            <MyList/>
            <div className="flex justify-center mt-20"> 
              <button className="w-[222px] h-[60] border border-black py-3">
                더 보러가기
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default MyContent