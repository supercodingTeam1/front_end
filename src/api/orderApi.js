import http from "./instance";

export const placeOrder = (data) => http.postJSON(`/cart/order`, data);
