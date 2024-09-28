import qs from "qs";
import request from "./axios";

class Http {
  static instance = null;
  //스태틱 메서드
  static getInstance() {
    if (Http.instance) {
      return Http.instance;
    }
    Http.instance = new Http();
    return Http.instance;
  }

  //프로토타입 메서드
  async createRequest(config) {
    const response = await request(config);
    return response.data;
  }

  get(url, params, headers, responseType) {
    return this.createRequest({
      method: "GET",
      url,
      params: {
        ...params,
      },
      headers,
      responseType: responseType,
    });
  }
  // for application/x-www-form-urlencoded
  post(url, data, headers) {
    return this.createRequest({
      method: "POST",
      url,
      data: qs.stringify({ ...data }),
      headers,
    });
  }

  postJSON(url, data) {
    return this.createRequest({
      method: "POST",
      url,
      data:
        Object.prototype.toString.call(data) === "[object Object]"
          ? { ...data }
          : data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  delete(url, data, headers) {
    return this.createRequest({
      method: "DELETE",
      url,
      data,
      headers,
    });
  }

  put(url, data) {
    return this.createRequest({
      method: "PUT",
      url,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  putParam(url, param) {
    return this.createRequest({
      method: "PUT",
      url,
      params: param,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  putForm(url, formData) {
    return this.createRequest({
      method: "PUT",
      url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  upload(url, formData) {
    return this.createRequest({
      method: "POST",
      url,
      data: formData,
      headers: {
        "X-AUTH-TOKEN": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjQsInN1YiI6IjQiLCJpc3MiOiJzdXBlcmNvZGluZyBhcHAiLCJpYXQiOjE3Mjc1MjczNTcsImV4cCI6MTcyNzUzMDk1N30.ZHQWEBIV07OI_yQ3GpVwRr1WrGppTrOteTyEuRY0k4qZBNq1HEVzTSEvQgZyJXQC5AnPiDDoYToL6QwWtv2sVA",
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default Http.getInstance(); //스태틱 메서드 호출
