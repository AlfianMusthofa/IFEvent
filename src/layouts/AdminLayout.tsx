import {
  CalendarCheck,
  Folder,
  LayoutDashboard,
  Newspaper,
  Users,
} from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.png";

const AdminLayout = () => {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard width={19} /> },
    {
      name: "Events",
      path: "/admin/events",
      icon: <CalendarCheck width={19} />,
    },
    { name: "Users", path: "/admin/users", icon: <Users width={19} /> },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: <Folder width={19} />,
    },
    { name: "Mentors", path: "/admin/mentors", icon: <Users width={19} /> },
    {
      name: "Articles",
      path: "/admin/article",
      icon: <Newspaper width={19} />,
    },
  ];

  const isActive = (path: any) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64  text-black p-4 border-r">
        <div className="flex items-center mb-7 px-4 gap-3">
          <img src={logo} className="w-[45px]" />
          <h1 className="text-xl font-bold ">ElevateHub</h1>
        </div>

        <nav className="space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded transition ${
                isActive(item.path)
                  ? "text-[#ec5b13] bg-gray-100 border border-[#ec5b13] tracking-wide"
                  : "text-black hover:bg-gray-200 tracking-wide"
              }`}
            >
              <div className="flex items-center gap-3 text-[14px]">
                {item.icon}
                {item.name}
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-[#efefef] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
