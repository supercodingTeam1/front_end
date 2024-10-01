import MyList from "./mylist/mylist"
import MyTab from "./mylist/mytab"
import MyUser from "./Myuserinfo"




const MyContent = ({mydata : userData}) => {


  return (
    <>
      <div className="py-5">
        <MyUser mydata={mydata}/>
        <div className="w-full ">
            <MyTab />
            <MyList/>
        </div>
      </div>
    </>
  )
}

export default MyContent