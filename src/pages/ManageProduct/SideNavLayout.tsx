import { NavLink, Outlet } from "react-router-dom";

export default function SideNavLayout() {
  return (
    <div className="flex border-t border-gray">
      <nav className="w-64 shadow-lg">
        <div className="p-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-5">판매자 패널</h1>
          <ul className="space-y-2">
            <li>
              <NavLink
                to={`products`}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition duration-200 ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray hover:bg-black hover:text-white"
                  }`
                }
              >
                판매상품
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`add`}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition duration-200 ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray hover:bg-black hover:text-white"
                  }`
                }
              >
                상품추가
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
