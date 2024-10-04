
import { useSetRecoilState } from "recoil";
import { logout } from "../api/userApi";
import { tokenRepo } from "../repositories/tokenRepository";
import Button from "./Button"
import { AuthAtom } from "../recoil/user/userAtom";
import { useNavigate } from "react-router-dom";


const Logout = () => {

  const setAuth = useSetRecoilState(AuthAtom)
  const navigate = useNavigate()


  const handleLogout = async () => {
    tokenRepo.removeToken()
    tokenRepo.removeRefreshToken()
    setAuth({
      role: 'guest',
      islogin: false,
    });
    navigate('/')
    // 로그아웃 요청 
    const res = await logout()
    console.log(res)
    //로그아웃시 로컬 호스트등 토큰 전부 삭제 
    // 페이지 이동 
    // 리코이 상태 초기화 
  };





  return(
    <>
      <Button
        type="button"
        primary={true}
        onClick={handleLogout}
        >
        로그아웃
      </Button>
    </>
  )
}

export default Logout