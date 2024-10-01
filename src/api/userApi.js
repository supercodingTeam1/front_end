import axios from "axios";
import http from "./instance";
import instance from "./instance";
import { tokenRepo } from "../repositories/tokenRepository";




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
  try{
    const res = await http.postJSON('/auth/login',data)
    const {user_token, user_refreshtoken, role} = res.data
    tokenRepo.setToken(user_token)
    tokenRepo.setRefreshToken(user_refreshtoken)
    const success = res.status
    return success
  }
  catch(error){
    return 'fail'
  }
}

// 로그아웃 
export const logout = async () => {
  return instance.post('/auth/logout', {
    
  })
}