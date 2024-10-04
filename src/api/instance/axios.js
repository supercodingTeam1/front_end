import axios from "axios";
import { tokenRepo } from "../../repositories/tokenRepository";
import { refreshToken } from "../userApi";

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
    const token = tokenRepo.getToken();
    // const token = localToken.get();
    // const token =
    //   "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjgsInN1YiI6IjgiLCJpc3MiOiJzdXBlcmNvZGluZyBhcHAiLCJpYXQiOjE3Mjc0OTMyMzIsImV4cCI6MTcyNzQ5NjgzMn0.mEV25E2j1W9Y2K6ifPr6QjjRuY0GqeK_C7bVSlKYeB3KbNwYBMq-aY5pWggdkSqyGqC11VopHjxP2nxoeCPtsw";

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
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 한다.
    // 응답 오류가 있는 작업 수행
    const { response } = error;
    if (response) {
      if (response.status === 401 || response.status === 400 ) {
        const originrefreshToken = tokenRepo.getRefreshToken();
        console.log(originrefreshToken)
        const originalRequest = error.config;

        try{
          const newAccessToken = await refreshToken(originrefreshToken)
          console.log('리프레쉬토큰 가져오기 ',newAccessToken)
          tokenRepo.setToken(newAccessToken.user_token)
          tokenRepo.setRefreshToken(newAccessToken.user_refreshtoken)

          originalRequest.headers.Authorization = `Bearer ${newAccessToken.user_token}`;
      
          return instance.request(originalRequest);
        }
        catch(refreshError){
          console.error("Refresh token failed", refreshError);
          console.log('안되고 있음')
          window.location.replace('/login');
          return Promise.reject(refreshError);
        }
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
