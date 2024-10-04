import { useSetRecoilState } from "recoil"
import { AuthAtom } from "./userAtom"


const SetAuthAtom = () => {

  const setAuth = useSetRecoilState(AuthAtom)
  setAuth({
    role: 'guest',
    islogin: false,
  });

}

export default SetAuthAtom
