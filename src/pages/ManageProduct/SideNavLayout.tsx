import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SideNavLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen ">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-5">판매자 패널</h1>
          <ul className="space-y-2">
            <li>
              <NavLink
                to={`products`}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`
                }
              >
                제품 목록
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`add-info`}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition duration-200 ${
                    isActive || location.pathname.includes("add-variant")
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`
                }
              >
                제품 추가
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className=" overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
