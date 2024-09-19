import MxLayout from "../layout/MxLayout"




const CardFilter = ({shoeSizes}) => {
  return(
    <>
      <MxLayout>
        <div className="flex  items-center justify-between">
          <div className="">
            <label htmlFor="sizeFilter"></label>
            <select name="sizeFilter" id="sizeFilter">
              <option value="all">전체</option>
              {shoeSizes.map((size) =>(
                    <option 
                        key={size} 
                        value={size.toString()}>
                        
                        {size}
                        </option>
                  ) )}
            </select>
          </div>
            <ul className="flex cursor-pointer">
              <li >낮은순 |</li>
              <li className=" ml-4">높은순</li>
            </ul>

        </div>
      </MxLayout>
    </>
  )
}

export default CardFilter