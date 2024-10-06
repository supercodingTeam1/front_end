import MyList from "./mylist/mylist";
import MyTab from "./mylist/mytab";
import MyUser from "./Myuserinfo";

const MyContent = ({ mydata , orderlist }) => {
  return (
    <>
      <div className="py-5">
        <MyUser mydata={mydata} />
        <div className="w-full ">
          <MyTab />
          <MyList orderlist={orderlist}/>
        </div>
      </div>
    </>
  );
};

export default MyContent;
