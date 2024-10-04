import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import MxLayout from "../../layout/MxLayout";
import AddressSearchModal from "../../layout/AddressSearchModal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { checkoutValidation } from "./validation";
import { useForm } from "react-hook-form";
import { placeOrder } from "../../api/orderApi";

interface Items {
  option_id: number;
  quantity: number;
}
interface CheckoutForm {
  items: Items[];
  name: string;
  payment: string;
  address: string;
  phone_num: string;
  isFromCart: boolean;
}

interface FormData {
  name: string;
  address_detail: string;
  address: string;
  phone_number: string;
  card_number: string;
  card_exp: string;
  card_cvv: string;
}
export default function Checkout() {
  const [isModal, setIsModal] = useState(false);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isFromCart, items, total } = state;

  const hadleAddressSelect = (selectAddress: string) => {
    setAddress(selectAddress);
    setValue("address", selectAddress);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(checkoutValidation),
  });

  const handlePlaceOrder = async (data) => {
    const {
      name,
      card_cvv,
      card_exp,
      card_number,
      address,
      address_detail,
      phone_number,
    } = data;
    const itemData = items.map((item) => {
      return { option_id: item.option_id, quantity: item.quantity };
    });
    const requestData: CheckoutForm = {
      items: itemData,
      name: name,
      payment: card_number + "," + card_exp + "," + card_cvv,
      address: address + address_detail,
      phone_num: phone_number,
      isFromCart: isFromCart ? true : false,
    };
    const res = await placeOrder(requestData);
    if (res.status === 400) {
      toast(res.message);
    } else if (res.status === 200) {
      navigate("/order-completed");
    }
  };
  return (
    <MxLayout>
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* 받는 사람 정보 & 결제 정보*/}
        <form onSubmit={handleSubmit(handlePlaceOrder)}>
          <div className="w-full flex lg:flex-col lg:w-2/5 gap-6">
            <div className="flex flex-col gap-4 w-1/2 lg:w-full">
              <h2 className="text-2xl font-bold">받는 사람</h2>
              <input
                {...register("name")}
                className="p-2 border rounded"
                type="text"
                placeholder="이름"
              />
              <p className="text-tahiti text-sm">{errors.name?.message}</p>
              <input
                {...register("phone_number")}
                className="p-2 border rounded"
                type="tel"
                placeholder="전화번호"
              />
              <p className="text-tahiti text-sm">
                {errors.phone_number?.message}
              </p>
              <div>
                <input
                  {...register("address")}
                  type="text"
                  name="user_address"
                  value={address}
                  placeholder="주소"
                  className="p-2 border rounded"
                  // disabled
                />
                <Button
                  primary
                  onClick={() => setIsModal(true)}
                  className="ml-2 rounded-md"
                >
                  주소찾기
                </Button>
              </div>
              <p className="text-tahiti text-sm">{errors.address?.message}</p>
              <input
                {...register("address_detail")}
                className="p-2 border rounded"
                type="text"
                placeholder="상세주소"
              />
              <p className="text-tahiti text-sm">
                {errors.address_detail?.message}
              </p>
            </div>
            {/* 카드 정보 */}
            <div className="flex flex-col gap-4 w-1/2 lg:w-full">
              <h3 className="text-2xl font-semibold">결제 정보</h3>
              <input
                {...register("card_number")}
                className="p-2 border rounded"
                type="text"
                placeholder="카드 번호"
              />
              <p className="text-tahiti text-sm">
                {errors.card_number?.message}
              </p>

              <input
                {...register("card_exp")}
                className="p-2 border rounded"
                type="text"
                placeholder="만료일"
              />
              <p className="text-tahiti text-sm">{errors.card_exp?.message}</p>

              <input
                {...register("card_cvv")}
                className="p-2 border rounded"
                type="text"
                placeholder="CVV"
              />
              <p className="text-tahiti text-sm">{errors.card_cvv?.message}</p>
            </div>
          </div>

          {/* 주문 요약 */}
          <div className="w-full lg:w-3/5 p-6">
            <h2 className="text-2xl font-bold mb-4">주문 요약</h2>
            <div className="flex justify-between font-semibold mb-2">
              <h3>상품</h3>
              <h3>가격</h3>
            </div>
            {items.map((item) => (
              <div key={item.option_id} className="flex justify-between mb-2">
                <p>
                  {item.item_name}
                  <span className="text-gray"> x {item.quantity}</span>
                </p>
                <p>₩{item.price.toLocaleString()}</p>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4 pt-4 border-t">
              <h3>총계</h3>
              <h3>₩{total.toLocaleString()}</h3>
            </div>
            <div className="my-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </div>
            <Button primary className="w-full" type="submit">
              결제하기
            </Button>
          </div>
        </form>
      </div>
      <AddressSearchModal
        isModal={isModal}
        onClose={() => setIsModal(false)}
        hadleAddressSelect={hadleAddressSelect}
        address={address}
      />
      <Toaster />
    </MxLayout>
  );
}
