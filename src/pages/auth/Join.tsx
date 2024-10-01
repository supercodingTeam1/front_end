import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultImg from "../../assets/DefaultUser.png";
import AddressSearchModal from "../../layout/AddressSearchModal";
import Button from "../../component/Button";
import { checkemail, signup } from "../../api/userApi";
import { formatPhoneNumber } from "../../util/phoneUtil";
import { yupResolver } from "@hookform/resolvers/yup";
import { joinValidation } from "./validation";

type FormData = {
  user_name: string;
  user_email: string;
  user_password: string;
  confirmPassword: string;
  user_address: string;
  user_phone: string;
  // user_profile: FileList;
};

const Join = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(defaultImg);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(joinValidation),
  });

  // 이메일 체크아웃
  const handleCheckEmail = async () => {
    const email = watch("user_email");
    const isDuplicate = await checkemail(email);
    if (isDuplicate && isDuplicate.status === 400) {
      alert(isDuplicate.message);
      setIsCheckEmail(false);
    } else {
      alert(isDuplicate.message);
      setIsCheckEmail(true);
    }
  };

  //주소 받아오기
  const hadleAddressSelect = (selectAddress: string) => {
    setAddress(selectAddress);
    setValue("user_address", selectAddress);
  };

  //핸드폰 번호 - 넣기
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue("user_phone", formattedPhoneNumber);
  };

  const joinForm = async (data: FormData) => {
    if (!isCheckEmail) {
      alert("이메일 중복확인을 진행해주세요");
      return;
    }

    // roles를 빈 배열로 초기화

    const roles: string[] = [];

    // isSeller에 따라 역할을 추가
    if (isSeller) {
      roles.push("ROLE_SELLER");
    } else {
      roles.push("ROLE_BUYER");
    }

    const newForm = {
      user_email: data.user_email,
      user_password: data.user_password,
      user_name: data.user_name,
      user_address: address,
      user_phone: data.user_phone,
    };

    // FormData 생성
    const formData = new FormData();

    formData.append("profileImage", profileImageUrl);
    formData.append(
      "request",
      JSON.stringify({
        ...newForm,
        roles,
      })
    );

    try {
      const res = await signup(formData);
      console.log("응답", res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("회원가입을 다시 시도해주세요");
    }
  };

  // const userprofile = watch("user_profile");
  // FileList 객체가 존재하고, 첫 번째 파일이 존재하는지 확인
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null; // 파일 선택
    if (file) {
      setProfileImageUrl(URL.createObjectURL(file)); // 이미지 미리보기
    }
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold mb-6 text-center ">회원가입</h2>

        <div className="flex justify-between w-[480px] mb-4 items-end">
          <div className="">
            <label
              htmlFor="profile"
              className="cursor-pointer  text-sm  text-gray-700  font-bold "
            >
              유저 프로필
              <img
                src={profileImageUrl}
                className="border border-gray-300 rounded-md w-[50px] h-[50px]"
              ></img>
            </label>
            <input
              className="hidden "
              onChange={handleFileChange}
              type="file"
              id="profile"
              accept="image/*"
              name="user_profile"
              required
            />
          </div>

          <div className="">
            <label className="block mb-4 flex gap-4">
              <span className="block text-sm text-gray-700 mb-1 font-bold">
                판매자 여부
              </span>
              <input
                type="checkbox"
                name="isSeller"
                onChange={() => {
                  setIsSeller(!isSeller);
                }}
                className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit(joinForm)}
          className=""
          >
          <label className="block mb-4">
            <span className="block text-sm  text-gray-700 mb-1 font-bold">
              이름
            </span>
            <input
              {...register("user_name")}
              type="text"
              name="user_name"
              placeholder="이름을 입력해주세요"
              required
              className="border border-gray-300 rounded-md w-[480px] h-[50px]"
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.user_name.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="block text-sm  text-gray-700 mb-1 font-bold">
              이메일
            </span>
            <input
              {...register("user_email")}
              type="email"
              name="user_email"
              required
              placeholder="이메일을 입력해주세요"
              className=" p-2 border border-gray-300 rounded-md w-[333px] h-[50px]"
            />
            <Button
              type="button"
              primary={true}
              className="ml-1 w-[135px] h-[50px]  border border-gray-300  rounded-md  hover:bg-blue-500 hover:text-white"
              onClick={() => handleCheckEmail()}
            >
              중복확인
            </Button>
            {errors.user_email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.user_email.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="block text-sm  text-gray-700 mb-1 font-bold">
              비밀번호
            </span>
            <input
              {...register("user_password")}
              type="password"
              name="user_password"
              placeholder="비밀번호를 입력해주세요"
              required
              className="p-2 border border-gray-300 rounded-md w-[480px] h-[50px]"
            />
            {errors.user_password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.user_password.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="block text-sm  text-gray-700 mb-1 font-bold">
              비밀번호 확인
            </span>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder=" 비밀번호를 한번 더 입력해주세요"
              required
              className="p-2 border border-gray-300 rounded-md w-[480px] h-[50px]"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="block text-sm  text-gray-700 mb-1 font-bold">
              주소
            </span>
            <input
              {...register("user_address")}
              type="text"
              name="user_address"
              value={address}
              placeholder="주소를 입력해주세요"
              required
              className="p-2 border border-gray-300 rounded-md w-[333px] h-[50px]"
            />
            <Button
              primary={true}
              onClick={() => setIsModal(true)}
              className="ml-1 w-[135px] h-[50px]  border border-gray-300  rounded-md  hover:bg-blue-500 hover:text-white"
            >
              주소찾기
            </Button>
            {errors.user_address && (
              <p className="text-red-500 text-sm mt-2">
                {errors.user_address.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="block text-sm text-gray-700 mb-1 font-bold">
              핸드폰 번호
            </span>
            <input
              {...register("user_phone")}
              type="tel"
              name="user_phone"
              placeholder="핸드폰번호를 입력해주세요"
              required
              onChange={handlePhoneChange}
              className=" p-2 border border-gray-300 rounded-md w-[480px] h-[50px]"
            />
            {errors.user_phone && (
              <p className="text-red-500 text-sm mt-2">
                {errors.user_phone.message}
              </p>
            )}
          </label>

          <Button
            primary={true}
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600  w-[480px] h-[50px] font-bold"
          >
            회원가입
          </Button>
        </form>

        <AddressSearchModal
          isModal={isModal}
          onClose={() => setIsModal(false)}
          hadleAddressSelect={hadleAddressSelect}
          address={address}
        />
      </div>
    </>
  );
};

export default Join;
