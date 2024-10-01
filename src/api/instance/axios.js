import axios from "axios";
// import { localToken } from "../../utils/auth";

const base_url = "http://15.165.190.65:8080";

//인스턴스 생성
const instance = axios.create({
  baseURL: base_url,
  timeout: 6000,
});

// 1.요청 인터셉터 세팅
instance.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      return;
    }

    // 타임존
    config.headers["time-zone"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    // 헤더에 토큰 추가

    // const token = localToken.get();
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjE4LCJzdWIiOiIxOCIsImlzcyI6InN1cGVyY29kaW5nIGFwcCIsImlhdCI6MTcyNzc1NjcxNywiZXhwIjoxNzI3NzYwMzE3fQ.jbUwZ_tsBs5MfaHytgyvyRDZsu6HH-2FFle2pkTkBZjWugYE71gTVU5KelWuRO2KO6U4jAOATtrIRl5JsUmfbA";

    let auth = "";

    if (token) {
      auth = "Bearer " + token;
    }

    if (auth) {
      config.headers["X-AUTH-TOKEN"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 2.응답 인터셉터 세팅
instance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 한다.
    // 응답 데이터가 있는 작업 수행

    const { data, status, config } = response;

    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 한다.
    // 응답 오류가 있는 작업 수행
    const { response } = error;
    if (response) {
      if (response.status === 401) {
        // 로그인 필요
        // localToken.remove();
        //TODO: history에 푸쉬, 로그인 뒤에 원래 있던 페이지로 이동
      } else if (response.status === 503) {
        // 서버 오류
      } else {
        console.log(response.data.message);
      }
      return response;
    }
    return Promise.reject(error);
  }
);
export default instance;
