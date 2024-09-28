import axios from "axios";
import http from "./instance";
import instance from "./instance";


//회원가입
export const signup = async (data) => {
  return http.upload(`/auth/signup`, data);
};


//이메일 체크아웃 
export const checkemail = async (data) => {
  return instance.post('/auth/duplicate',{
    user_email : data.user_email
  })
}

// 로그인 
export const login = async (data) => {
  return instance.post('/auth/login', {
    user_name : data.user_email,
    user_password: data.user_password
  },
)

  //로직추가  jwt / 리프레쉬 고민. .. 
}