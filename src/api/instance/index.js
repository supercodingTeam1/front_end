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

  //외부사용 가능 메서드
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
      headers: {
        "Content-Type": "application/json",
      },
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
        "Content-Type": "multipart/form-data",
      },
    });
  }

  refreshtoken(url, refreshToken){
    return this.createRequest({
      method: 'POST',
      url,
      headers: {
        'refreshToken' : refreshToken
      }
    })
  }
}

export default Http.getInstance(); //스태틱 메서드 호출
