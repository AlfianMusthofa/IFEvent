import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../assets/icons/logo.png";
import Avatar from "../assets/icons/userAvatar.png";
import { API_URL } from "../service/api";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const closeMenu = () => setMenuOpen(false);

  const logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refreshToken }),
      });
    } catch (error) {
      console.error("Logout error:", error);
    }

    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

    window.location.href = "/";
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Events", to: "/events" },
    { label: "Article", to: "/article" },
    { label: "About", to: "/about" },
    { label: "Partner", to: "/partners" },
  ];

  return (
    <header className="bg-yellow-primer text-white shadow-md">
      <div className="mx-auto flex max-w-[1029px] items-center justify-between px-4 py-2 md:px-0">
        <Link to="/" onClick={closeMenu} aria-label="Home">
          <img src={Logo} alt="Logo" className="w-[55px]" />
        </Link>

        {/* Navigasi desktop */}
        <nav className="hidden items-center gap-[14px] text-[15px] font-medium text-black md:flex">
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} className="hover:underline">
              {item.label}
            </Link>
          ))}

          {user ? (
            <div className="group relative">
              <Link to="/me/profile" aria-label="Buka profil">
                <img
                  className="h-[25px] w-[25px] cursor-pointer rounded-full object-cover"
                  src={user.image || Avatar}
                  alt="Avatar"
                />
              </Link>

              <div className="invisible absolute right-0 top-full z-50 mt-2 w-36 rounded-md border bg-white text-black opacity-0 shadow-md transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <Link
                  to="/me/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        {/* Tombol hamburger mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-black md:hidden"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="border-t border-black/10 px-4 pb-4 text-black md:hidden">
          <div className="mx-auto flex max-w-[1029px] flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className="py-2 font-medium hover:underline"
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/me/profile"
                  onClick={closeMenu}
                  className="py-2 font-medium hover:underline"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="py-2 text-left font-medium text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="py-2 font-medium hover:underline"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
