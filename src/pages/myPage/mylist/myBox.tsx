import defaultImg from "../../../assets/DefaultUser.png";

const MyBosxItem = ({ orderlist }) => {
  const { address, myBuyItemDetailDTOList, order_at, order_num } = orderlist;

  return (
    <>
      <div className="border py-5 px-6 my-2 cursor-pointer">
        <div className="flex justify-around">
          <div className="text-center ">
            <strong className="block">{order_num}</strong>
            <span className="text-xs">{order_at}</span>
          </div>
          {myBuyItemDetailDTOList.map(
            ({
              item_image,
              item_name,
              price,
              myBuyItemOptionDetailDTOList,
            }) => (
              <div>
                <div className="w-[60px] h-[60px] ">
                  <img
                    src={orderlist ? item_image : defaultImg}
                    alt="이미지"
                    className=""
                  />
                </div>
                <div className="text-center">
                  <strong className="block">{item_name}</strong>
                  <span className="text-xs ">{price}</span>
                </div>
                {myBuyItemOptionDetailDTOList.map(
                  ({ size, quantity }) => (
                    <div className="text-center">
                      <strong className="block">{size}</strong>
                      <span className="text-xs ">{quantity}</span>
                    </div>
                  )
                )}
              </div>
            )
          )}
          <div className="">
            <p>{address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBosxItem;
