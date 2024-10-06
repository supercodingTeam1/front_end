
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

    try{
      const res = await logout()
      console.log(res)
      if(res.status === 200){
        tokenRepo.removeToken()
        tokenRepo.removeRefreshToken()
        setAuth({
          role: 'guest',
          islogin: false,
        });
        navigate('/')
      }
    }
    catch(error){
      console.log(error)
    }
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