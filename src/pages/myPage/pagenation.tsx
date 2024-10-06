



const MypageNation = ({ setCurrentPage, totalPage,currentPage }) => {

  const handlePageChange = (number) => {
    if (number < 1 || number > totalPage) return;
    setCurrentPage(number);
  };


  const pageNumber: number[] = Array.from({ length: totalPage }, (_, i: number) => i + 1);


  return (
    <>
      <div className="flex justify-center items-center my-16">
        <button 
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
        disabled={currentPage === 1}
        >
          이전
        </button>
        {
          pageNumber.map((number) => (
            <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 mx-1 border rounded-md ${number === currentPage ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {number}
            </button>
          )) 
        }
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          disabled={currentPage === totalPage}
          >
          다음
        </button>
      </div>
    </>
  );
};

export default MypageNation;
