import * as yup from 'yup';





// Yup 스키마 정의
export const joinValidation = yup.object().shape({
  user_name: yup.string()
    .required('이름을 입력해주세요'),

    user_email: yup.string()
    .email('유효한 이메일 형식이 아닙니다.')
    .max(20, '이메일의 최대 길이는 20자 미만입니다.')
    .matches(/\S+@\S+\.\S+/, '이메일 형식으로 입력해주세요')
    .required('이메일을 입력해 주세요.'),

    user_password: yup.string()
    .min(8, "최소 8자 이상 작성해야 합니다.")
    .max(16, "최대 16자까지 작성 가능합니다.")
    .required("비밀번호를 입력해 주세요!"),

  confirmPassword: yup.string()
    .oneOf([yup.ref('user_password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 한번 더 입력해 주세요'),

    user_address: yup.string()
  .required('주소를 입력해주세요'),

  user_phone: yup.string()
  .required('핸드폰 번호를입력해주세요')
    .matches(/^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/, "번호를 정확히 입력해 주세요."),

  user_profile: yup.mixed()
  .test('fileType', 'Invalid file type', (value) => {
    return value && value instanceof FileList; // FileList 타입인지 체크
  })
  .required('Profile image is required'),
  isSeller: yup.boolean().optional(), 
});


export const loginValidaton = yup.object().shape({
  user_email: yup.string()
  .email('유효한 이메일 형식이 아닙니다.')
  .max(20, '이메일의 최대 길이는 20자 미만입니다.')
  .matches(/\S+@\S+\.\S+/, '이메일 형식으로 입력해주세요')
  .required('이메일을 입력해 주세요.'),

  user_password: yup.string()
  .min(8, "최소 8자 이상 작성해야 합니다.")
  .max(16, "최대 16자까지 작성 가능합니다.")
  .required("비밀번호를 입력해 주세요!"),
});