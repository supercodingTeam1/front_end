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
        </div>
      </div>
    </>
  )
}

export default MyContent