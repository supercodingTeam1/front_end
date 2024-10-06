import defaultImg from "../../../assets/DefaultUser.png";

const MyBosxItem = ({ orderlist }) => {
  const { address, myBuyItemDetailDTOList, order_at, order_num } = orderlist;

  const firstItem = myBuyItemDetailDTOList[0];

  return (
    <>
      <div className="border py-5 px-6 my-2 cursor-pointer">
        <div className="flex justify-between items-cente">
          <div className="text-center w-1/6 mr-28">
            <strong className="block">{order_num}</strong>
            <span className="text-xs">{order_at}</span>
          </div>


          {firstItem && (
            <div className="flex gap-12 w-2/3 items-center">
              <div className="w-[60px] h-[60px] mr-10">
                <img
                  src={firstItem.item_image ? firstItem.item_image : defaultImg}
                  alt="이미지"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-1/3 text-center">
                <strong className="block">{firstItem.item_name}</strong>
                <span className="text-xs">{firstItem.price}</span>
              </div>

              {firstItem.myBuyItemOptionDetailDTOList.map(
                ({ size, quantity }) => (
                  <div className="w-1/3 text-center" key={size}>
                    <strong className="block">{size}</strong>
                    <span className="text-xs">{quantity}</span>
                  </div>
                )
              )}
            </div>
          )}

          <div className="w-1/6 text-center ml-12 text-sm mt-2">
            <p>{address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBosxItem;
