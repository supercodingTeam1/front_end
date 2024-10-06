import http from "./instance";

export const uploadProduct = (data) => http.upload(`/sell`, data);
export const getSellItems = () => http.get(`/sell`);
export const changeItemStock = (data) => http.put(`/sell`, data);
