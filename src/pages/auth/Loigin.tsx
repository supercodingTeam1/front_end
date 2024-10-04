import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { useForm } from "react-hook-form";

import {  useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import { login } from "../../api/userApi";
import { loginValidaton } from "./validation";
import { tokenRepo } from "../../repositories/tokenRepository";
import {  useSetRecoilState } from "recoil";
import { AuthAtom } from "../../recoil/user/userAtom";




type LoginData = {
  user_email: string;
  user_password: string;
};


const Login = () => {
  const setAuth = useSetRecoilState(AuthAtom)
  const navigate = useNavigate()

  const { register, handleSubmit , formState: { errors }, } = useForm<LoginData>({
    mode: 'onChange',
    resolver : yupResolver(loginValidaton)
  });


  const loginForm = async (data: LoginData) => {


      try{
        const res = await login(data);

        if(res.status == 200 ){
          const {user_token, user_refreshtoken, role} = res.data
          tokenRepo.setToken(user_token)
          tokenRepo.setRefreshToken(user_refreshtoken)
          setAuth({
            role : role,
            islogin: true
          })
          navigate('/mypage')
        }
      }
      catch(error){
        console.log(error)
        alert('로그인을 다시 시도해주세요')
      }
    }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
          <form onSubmit={handleSubmit(loginForm)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                이메일
              </label>
              <input
                {...register("user_email")}
                type="email"
                id="email"
                name="user_email"
                className="shadow appearance-none border rounded w-[480px] h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="이메일을 입력하세요"
                required
              />
              {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                {...register("user_password")}
                type="password"
                id="password"
                name="user_password"
                className="shadow appearance-none border rounded w-[480px] h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="비밀번호를 입력하세요"
                required
              />
                  {errors.user_password && <p className="text-red-500 text-sm">{errors.user_password.message}</p>}
            </div>
            <div className="flex flex-col items-center justify-between">
              <Button 
                type="submit"
                primary={true}
                className=" font-bold focus:outline-none focus:shadow-outline w-[480px] h-[50px] mb-3"
              >
                로그인
              </Button>
              <Button
                primary={true}
                className="font-bold focus:outline-none focus:shadow-outline w-[480px] h-[50px]"
                onClick={() => navigate('/join')}
                >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
