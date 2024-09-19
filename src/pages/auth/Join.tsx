import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { joinValidation } from "./validation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import defaultImg from '../../assets/DefaultUser.png'
import AddressSearchModal from "../../layout/AddressSearchModal";

type FormData = {
  user_name: string;
  user_email: string;
  user_password: string;
  confirmPassword: string;
  user_address: string;
  user_phone: string;
  user_profile : FileList;
  isSeller : boolean;
};



const Join = () => {

  const navigate = useNavigate()
  const [address, setAddress ] = useState('')
  const [isModal, setIsModal] = useState(false);
  const  [imgPre, setImgPre] =useState('');
  const [isSeller, setIsSeller] = useState(false)

  const {register, handleSubmit, formState: { errors },watch , setValue } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(joinValidation)
  });


  const hadleAddressSelect = ( selectAddress : string) => {
    setAddress(selectAddress)
    setValue('user_address', selectAddress);
  }





  const joinForm = async (data: FormData) => {
    console.log(data) 
    const role = isSeller ? 'seller' : 'buyer';
    const userData = {
      email : data.user_email,
      password : data.user_password,
      name :data.user_name,
      address : address,
      phoneNum : data.user_phone,
      userprofile : data.user_profile[0],
      role : role
    }
      navigate('/login')
      console.log(userData)
    // try{
    //   // 서버통신
    //   // 이미지 파일 보내기 
    //   // const formData = new FormData();
    //   // Object.keys(userData).forEach(key => {
    //   // formData.append(key, userData[key])
    //   console.log(userData)
    //   navigate('/login')
    // })


    // }catch(error){

    // }

  }

  const userprofile = watch('user_profile')
  useEffect(() => {
    if(userprofile && userprofile.length > 0){
      const file = userprofile[0]
      const objectUrl = URL.createObjectURL(file);
      setImgPre(objectUrl)
    }
  },[userprofile])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(joinForm)}>
        <h2 className="text-2xl font-semibold mb-6 text-center ">회원가입</h2>


        <label htmlFor="profile" className="cursor-pointer  text-sm  text-gray-700  font-bold">유저 프로필
            <img src={imgPre || defaultImg} className="border border-gray-300 rounded-md w-[50px] h-[50px]"></img>
        </label>
        <input 
          className="hidden"
          {...register('user_profile')}
          type="file"  
          id='profile'
          accept="image/*"
          name="user_profile"
          required
        />
        {errors.user_profile?.message && (<p className="text-red-500 text-sm mt-2">{errors.user_profile.message}</p>)}


        
        <label className="block mb-4">
          <span className="block text-sm  text-gray-700 mb-1 font-bold">이름</span>
          <input
            {...register('user_name')}
            type="text"
            name="user_name"
            placeholder="이름을 입력해주세요"
            required
            className="border border-gray-300 rounded-md w-[480px] h-[50px]"
          />
          {errors.user_name && <p className="text-red-500 text-sm mt-2">{errors.user_name.message}</p>}
        </label>



        <label className="block mb-4">
          <span className="block text-sm  text-gray-700 mb-1 font-bold">이메일</span>
          <input
            {...register('user_email')}
            type="email"
            name="user_email"
            required
            placeholder="이메일을 입력해주세요"
            className=" p-2 border border-gray-300 rounded-md w-[333px] h-[50px]"
          />
          <button
            type="button"
            className="ml-1 w-[135px] h-[50px]  border border-gray-300  rounded-md  hover:bg-blue-500 hover:text-white">
            중복확인
          </button>
          {errors.user_email && <p className="text-red-500 text-sm mt-2">{errors.user_email.message}</p>}
        </label>


        <label className="block mb-4">
          <span className="block text-sm  text-gray-700 mb-1 font-bold">비밀번호</span>
          <input
          {...register('user_password')}
            type="password"
            name="user_password"
            placeholder="비밀번호를 입력해주세요"
            required
            className="p-2 border border-gray-300 rounded-md w-[480px] h-[50px]"
          />
            {errors.user_password && <p className="text-red-500 text-sm mt-2">{errors.user_password.message}</p>}
        </label>


        <label className="block mb-4">
          <span className="block text-sm  text-gray-700 mb-1 font-bold">비밀번호 확인</span>
          <input
          {...register('confirmPassword')}
            type="password"
            name="confirmPassword"
            placeholder=" 비밀번호를 한번 더 입력해주세요"
            required
            className="p-2 border border-gray-300 rounded-md w-[480px] h-[50px]"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}
        </label>



        <label className="block mb-4">
          <span className="block text-sm  text-gray-700 mb-1 font-bold">주소</span>
          <input
            {...register('user_address')}
            type="text"
            name="user_address"
            value={address}
            placeholder="주소를 입력해주세요"
            required
            className="p-2 border border-gray-300 rounded-md w-[333px] h-[50px]"
          />
          <button
            type="button"
            onClick={() => setIsModal(true)}
            className="ml-1 w-[135px] h-[50px]  border border-gray-300  rounded-md  hover:bg-blue-500 hover:text-white">
            주소찾기</button>
          {errors.user_address && <p className="text-red-500 text-sm mt-2">{errors.user_address.message}</p>}
        </label>



        <label className="block mb-4">
          <span className="block text-sm text-gray-700 mb-1 font-bold">핸드폰 번호</span>
          <input
          {...register('user_phone')}
            type="tel"
            name="user_phone"
            placeholder="핸드폰번호를 입력해주세요"
            required
            className=" p-2 border border-gray-300 rounded-md w-[480px] h-[50px]"
          />
          {errors.user_phone && <p className="text-red-500 text-sm mt-2">{errors.user_phone.message}</p>}
        </label>


        <label className="block mb-4 flex gap-4">
          <span className="block text-sm text-gray-700 mb-1 font-bold">판매자 여부</span>
          <input
          {...register('isSeller')}
            type="checkbox"
            name="isSeller"
            onChange={() => setIsSeller(!isSeller)} 
            className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
        </label>



        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600  w-[480px] h-[50px] font-bold"
        >
          회원가입
        </button>
      </form>


      <AddressSearchModal
        isModal={isModal}
        onClose={()=> setIsModal(false)}
        hadleAddressSelect={hadleAddressSelect}
      />
    </div>
    </>
  )
}

export default Join