import http from "./instance";

export const uploadProduct = (data) => http.upload(`/sell`, data);
