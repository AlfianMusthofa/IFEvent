import { NavLink, Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Events", path: "/admin/events" },
    { name: "Users", path: "/admin/users" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Mentors", path: "/admin/mentors" },
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <nav className="space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded transition ${
                isActive(item.path)
                  ? "bg-blue-600 text-yellow-primer"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-gray-200 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
