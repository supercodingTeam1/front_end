import MxLayout from "../layout/MxLayout";

export default function Footer() {
  return (
    <div className=" border-t border-gray-400">
      <MxLayout>
        <div className="flex justify-between">
          <div className="">
            <h2 className="mb-12">로고</h2>
            <p className="text-base text-gray-300">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="">
            <ul>
              <span className=" text-gray-300 mb-12  block">link</span>
              <li className="font-bold mb-8">home</li>
              <li className="font-bold mb-8">men</li>
              <li className="font-bold mb-8">women</li>
              <li className="font-bold mb-8">kids</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <span className=" text-gray-300 mb-12 block">help</span>
              <li className="font-bold mb-8">Payment Options</li>
              <li className="font-bold mb-8">Returns</li>
              <li className="font-bold mb-8">Privacy Policies</li>
            </ul>
          </div>
          <div className="">
            <span className=" text-gray-300 mb-12 block">Newsletter</span>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-black outline-none block mb-8"
            />
            <button className="border-b border-black ">SUBSCRIBE</button>
          </div>
        </div>
      </MxLayout>
      <div className="border-t border-gray-400 pt-12 ">
        <p className="ml-40">2023 furino. All rights reserved</p>
      </div>
    </div>
  );
}
