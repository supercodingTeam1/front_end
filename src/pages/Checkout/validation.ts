import * as yup from "yup";

// Yup 스키마 정의
export const checkoutValidation = yup.object().shape({
  name: yup.string().required("이름을 입력해주세요"),

  phone_number: yup.string().required("핸드폰 번호를 입력해 주세요."),

  address: yup.string().required("주소를 입력해 주세요."),

  address_detail: yup.string().required("상세주소를 주세요"),

  card_number: yup.string().required("카드 번호를 입력해주세요"),
  card_exp: yup.string().required("카드 만료일을 입력해주세요"),
  card_cvv: yup.string().required("카드 cvv를 입력해주세요"),
});
