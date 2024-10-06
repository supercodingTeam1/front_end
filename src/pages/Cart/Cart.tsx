import { Fragment, useEffect, useState } from "react";
import MxLayout from "../../layout/MxLayout";
import Button from "../../component/Button";
import { useNavigate } from "react-router-dom";
import { deleteCartItem, getItemsInCart } from "../../api/cartApi";
import CartItem from "./CartItem";

interface Item {
  item_id: number;
  item_image: string;
  item_name: string;
  price: number;
  cart_id: number;
  quantity: number;
  size: number;
  option_id: number;
}

export default function Cart() {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);

  const handleDeleteItem = async (id) => {
    try {
      // API 요청 예시
      const res = await deleteCartItem({ cart_id: id });
      if (res.status === 200) {
        setCartItem((prev) => prev.filter((item) => item.cart_id !== id));
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  };
  const requestCartItem = async () => {
    try {
      const res = await getItemsInCart();
      if (res.status === 200) {
        setCartItem(res.data);
      }
    } catch {}
  };

  useEffect(() => {
    requestCartItem();
  }, []);

  useEffect(() => {
    if (cartItem.length > 0) {
      let sum = 0;
      cartItem.forEach((item) => (sum += item.quantity * item.price));
      setTotal(sum);
    }
  }, [cartItem]);

  const onClickCheckout = () => {
    const params = cartItem.map((eachItem) => {
      return {
        quantity: eachItem.quantity,
        option_id: eachItem.option_id,
        item_name: eachItem.item_name + " " + eachItem.size,
        price: eachItem.quantity * eachItem.price,
      };
    });

    navigate("/checkout", {
      state: { items: params, total: total, isFromCart: true },
    });
  };

  return (
    <MxLayout>
      <div className="min-h-screen w-full flex flex-col lg:flex-row">
        {cartItem.length > 0 && (
          <>
            <div className="w-full lg:w-2/3 lg:mr-8 mb-8 lg:mb-0">
              {/* 테이블 제목 */}
              <div className="flex justify-between pb-2 mb-4 font-bold bg-black p-2 overflow-x-auto text-white text-center">
                <div className="w-2/5">상품</div>
                <div className="w-1/5">가격</div>
                <div className="w-1/5">수량</div>
                <div className="w-1/5">총계</div>
              </div>
              {/* 테이블 목록 */}
              {cartItem.map((item) => {
                return (
                  <Fragment key={item.cart_id}>
                    <CartItem
                      {...item}
                      deleteItem={() => handleDeleteItem(item.cart_id)}
                      reFetchCartItems={requestCartItem}
                    />
                  </Fragment>
                );
              })}
            </div>
            {/* 오른쪽 총계 */}
            <div className="w-full lg:w-1/3 h-auto md:h-[300px] py-5 flex flex-col justify-between items-center rounded-md border border-black">
              <h2 className="text-2xl font-bold mb-4 ">주문 요약</h2>
              <div className="flex justify-between mb-4">
                <span>총계:</span>
                <span className="font-bold">₩ {total.toLocaleString()} </span>
              </div>
              <Button primary onClick={onClickCheckout}>
                주문하기
              </Button>
            </div>
          </>
        )}
        {cartItem.length === 0 && <div className="mx-auto">비어있습니다.</div>}
      </div>
    </MxLayout>
  );
}
