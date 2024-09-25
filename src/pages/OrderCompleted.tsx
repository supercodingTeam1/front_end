import oderFinished from "../assets/order-finish.png";
import MxLayout from "../layout/MxLayout";
import Button from "../component/Button";
import { Link } from "react-router-dom";

export default function OrderCompleted() {
  return (
    <MxLayout>
      <div className="flex flex-col items-center justify-center">
        <img src={oderFinished} className="w-[500px] pt-[100px]" />
        <Link to="/">
          <Button primary>쇼핑 계속하기</Button>
        </Link>
      </div>
    </MxLayout>
  );
}
