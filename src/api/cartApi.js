import http from "./instance";

//
export const addToCart = (data) => http.postJSON(`/cart`, data);
//
export const getItemsInCart = () => http.get(`/cart`);
