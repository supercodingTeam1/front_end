import Button from "../component/Button"
import MxLayout from "../layout/MxLayout"




const CardFilter = ({shoeSizes, setOrderFilter, setSizeFilter}) => {
  return(
    <>
      <MxLayout>
        <div className="flex  items-center justify-between">
          <div className="">
            <label htmlFor="sizeFilter"></label>
            <select 
              name="sizeFilter" 
              id="sizeFilter"
              onChange={(e) => {setSizeFilter(e.target.value)}}
              >
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
              <Button 
                type="button"  
                primary={true}
                onClick={() => setOrderFilter('asc')}
                >
              낮은순 
              </Button>
              <Button 
                type="button"
                primary={false} 
                onClick={() => setOrderFilter('desc')}
                className=" ml-4">높은순
              </Button>
            </ul>

        </div>
      </MxLayout>
    </>
  )
}

export default CardFilter