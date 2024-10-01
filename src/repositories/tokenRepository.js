const ACCESS_TOKEN  = 'X-AUTH-TOKEN';
const REFRESH_TOKEN = 'X-AUTH-REFRESHTOKEN'
const USER_ROLE = 'role'

export const tokenRepo = {
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
  },

  //리프레쉬 토큰 저장 
  setRefreshToken(token){
    localStorage.setItem(REFRESH_TOKEN, token)
  },

  //리프레쉬 토큰 가져오기
  getRefreshToken(){
    return localStorage.getItem(REFRESH_TOKEN)
  },

  //리프레쉬 토큰 지우기 
  removeRefreshToken(){
    localStorage.removeItem(REFRESH_TOKEN)
  },

  setUserRole(role){
    localStorage.setItem(USER_ROLE,role)
  },

  getUserRole(){
    localStorage.getItem(USER_ROLE)
  },

  removeUserRole(){
    localStorage.removeItem(USER_ROLE)
  }


}