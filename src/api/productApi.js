import http from "./instance";

//
export const getItemList = (params) => http.get(`/items`, params);
// 상세
export const getItemDetails = (params) => http.get(`/items/detail`, params);
