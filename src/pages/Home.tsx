
import { MxLayout } from "../layout/MxLayout";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <MxLayout>
      <div className="flex flex-col">Main Page!!!!</div>
    </MxLayout>
  );
}
