import DaumPostcode from "react-daum-postcode";

interface PostcodeData {
  address: string;      // 기본 주소
  jibunAddress: string; // 지번 주소
}


interface AddressSearchModalProps {
  isModal: boolean;
  address: string;
  onClose: () => void;  // onClose는 모달을 닫는 함수
  hadleAddressSelect: (address: string) => void;  // 주소 선택 시 호출되는 함수
  
}





const AddressSearchModal = ({isModal, onClose, hadleAddressSelect}:AddressSearchModalProps ) => {

  const handleComplete = (data: PostcodeData) => {
    hadleAddressSelect(data.address);
    console.log(data)
    onClose();
  };

  if (!isModal) return null;


  return(
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">주소 검색</h2>
        <div className="mb-4">
          <DaumPostcode onComplete={handleComplete} />
        </div>
        <button 
          onClick={onClose} 
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          닫기
        </button>
      </div>
    </div>
    
    </>
  )
}

export default AddressSearchModal