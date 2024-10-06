import axios from "axios";
import http from "./instance";
import instance from "./instance";

//유저정보 요청

export const mypageUser = async () => {
  return http.get("/mypage");
};

//마이 주문 목록 요청
export const myOrderApi = async () => {
  return http.get("/mypage/order");
};
