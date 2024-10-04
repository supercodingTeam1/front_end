import axios from "axios";
import http from "./instance";
import instance from "./instance";






//회원가입
export const signup = async (data) => {
  return http.upload(`/auth/signup`, data);
};


//이메일 체크아웃 
export const checkemail = async (data) => {
  return  http.postJSON('/auth/duplicate',data)
}

// 로그인 
export const login = async (data) => {
    return http.postJSON('/auth/login',data)
}

// 로그아웃 
export const logout = async () => {
  return http.post('/auth/logout')
}

//회원탈퇴 
export const deleteUser = async () => {
  return http.delete('/auth/withdraw')
}


//토큰 재요청 
export const refreshToken = async (originrefreshToken) => {
  const res = await http.refreshToken('/auth/refreshToken',originrefreshToken)
  console.log(res)
  return res.data
}