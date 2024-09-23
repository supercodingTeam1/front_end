import { Link, useRouteError } from "react-router-dom";
import notFound from "../assets/404.png";
import Button from "../component/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={notFound} className="w-[500px]" />
      <Link to="/">
        <Button primary>Back To Home</Button>
      </Link>
    </div>
  );
}
