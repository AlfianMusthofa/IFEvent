import Logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
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
            <a href="/classlist" className="hover:underline">
              Events
            </a>
            <a href="/history" className="hover:underline">
              History
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/partners" className="hover:underline">
              Partner
            </a>
            {user ? (
              <Link to="/user/dashboard">{user.name}</Link>
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
