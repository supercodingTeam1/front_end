
import { useSetRecoilState } from "recoil";
import { deleteUser } from "../../api/userApi";
import Button from "../../component/Button";
import { tokenRepo } from "../../repositories/tokenRepository";
import { AuthAtom } from "../../recoil/user/userAtom";
import { useNavigate } from "react-router-dom";

const DeleteUser = ({ setIsDelete }) => {

  const setAuth = useSetRecoilState(AuthAtom)
  const navigate = useNavigate()
 
  const handleClose = () => {
    setIsDelete(false)
  }

  const hadleSubmit = async() => {
    try{
      const res = await deleteUser();
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
  }


  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <p className="mb-4">정말로 탈퇴하시겠습니까?</p>
          <div className="flex gap-4">
            <Button
              primary={true}
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600  w-[480px] h-[50px] font-bold"
              onClick={hadleSubmit}
            >
              탈퇴하기
            </Button>
            <Button
              primary={false}
              type="button"
              className="w-full py-2 px-4 bg-blue-500 text-black rounded-md hover:bg-blue-600  w-[480px] h-[50px] font-bold"
              onClick={handleClose}
            >
              취소
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
