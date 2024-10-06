import defaultImg from "../../../assets/DefaultUser.png";

const MyBosxItem = ({ orderlist }) => {
  const { address, myBuyItemDetailDTOList, order_at, order_num } = orderlist;

  const firstItem = myBuyItemDetailDTOList[0];

  return (
    <>
      <div className="border py-5 px-6 my-2 cursor-pointer">
        <div className="flex justify-between items-cente">
          {/* 주문 번호와 날짜 */}
          <div className="text-center w-1/6 mr-28">
            <strong className="block">{order_num}</strong>
            <span className="text-xs">{order_at}</span>
          </div>

          {/* 첫 번째 상품만 표시 */}
          {firstItem && (
            <div className="flex gap-12 w-2/3 items-center">
              {/* 상품 이미지 */}
              <div className="w-[60px] h-[60px] mr-10">
                <img
                  src={firstItem.item_image ? firstItem.item_image : defaultImg}
                  alt="이미지"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 상품 이름과 가격 */}
              <div className="w-1/3 text-center">
                <strong className="block">{firstItem.item_name}</strong>
                <span className="text-xs">{firstItem.price}</span>
              </div>

              {/* 옵션 정보 (사이즈, 수량) */}
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

          {/* 주소 */}
          <div className="w-1/6 text-center ml-12 text-sm mt-2">
            <p>{address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBosxItem;
