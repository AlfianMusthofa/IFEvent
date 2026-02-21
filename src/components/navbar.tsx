import Logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";
import Avatar from "../assets/icons/userAvatar.png";
import { API_URL } from "../service/api";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = async (e) => {
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

  return (
    <>
      <div className="bg-yellow-primer text-white">
        <div className="max-w-[1029px] mx-auto flex justify-between py-[15px]">
          <div>
            <a href="/">
              <img src={Logo} className="w-[65px]" />
            </a>
          </div>
          <div className="flex items-center gap-[14px] text-[15px] text-black font-medium">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/events" className="hover:underline">
              Events
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/partners" className="hover:underline">
              Partner
            </a>
            {user ? (
              <div className="relative group">
                <Link to="/me/profile">
                  {user.image ? (
                    user.image
                  ) : (
                    <img
                      className="w-[25px] cursor-pointer"
                      src={Avatar}
                      alt="avatar"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <div
                  className="absolute left-0 mt-2 w-36 bg-white border rounded-md shadow-md 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-150"
                >
                  <Link
                    to="/me/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
