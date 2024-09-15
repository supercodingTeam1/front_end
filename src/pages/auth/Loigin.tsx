import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { useForm } from "react-hook-form";
import { loginValidaton } from "./validation";
import { useNavigate } from "react-router-dom";

type LoginData = {
  user_email: string;
  user_password: string;
};

const Login = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, reset , formState: { errors }} = useForm<LoginData>({
    resolver : yupResolver(loginValidaton)
  });

  const loginForm = (data: LoginData) => {
    console.log(data);
    reset();
    navigate('/')
  };

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
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[480px] h-[50px]"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
