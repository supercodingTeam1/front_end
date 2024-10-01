import http from "./instance";

//
export const addToCart = (data) => http.postJSON(`/cart`, data);
//
export const getItemsInCart = () => http.get(`/cart`);

export const editItemQuantity = (data) => http.put(`/cart`, data);

export const deleteCartItem = (data) => http.delete(`/cart`, data);
