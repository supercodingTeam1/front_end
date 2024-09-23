import * as yup from "yup";

// Yup 스키마 정의
export const infoValidation = yup.object().shape({
  item_name: yup
    .string()
    .max(100, "최대 100자까지 작성 가능합니다.")
    .required("상품 이름을 입력해주세요"),
  price: yup
    .number()
    .max(999999, "금액이 100만원을 초과하였습니다.")
    .required("가격을 입력해 주세요."),

  description: yup
    .string()
    .max(500, "500자까지 입니다.")
    .required("상세설명을 작성해주세요."),
  category_type: yup.string().required("카테고리를 선택해 주세요"),
  category_gender: yup.string().required("성별을 선택해 주세요"),
});

export const variantValidaton = yup.object().shape({
  options: yup
    .array()
    .min(1, "최소 1개의 옵션을 선택해 주세요.")
    .required("이메일을 입력해 주세요."),
});
