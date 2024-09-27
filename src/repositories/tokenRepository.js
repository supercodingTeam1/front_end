const ACCESS_TOKEN  = 'acessToken';

const tokenRepo = {
  //토큰을 저장 
  setToken(token){
    localStorage.setItem(ACCESS_TOKEN, token)
  },
  // 토큰 가져오기 
  getToken(){
    return localStorage.getItem(ACCESS_TOKEN)
  },
  //토큰 삭제 
  removeToken(){
    localStorage.removeItem(ACCESS_TOKEN)
  }
}