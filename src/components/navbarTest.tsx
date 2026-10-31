import { Bell, ChevronRight, CircleUserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { API_URL } from "../service/api";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Article", href: "/article" },
  { label: "About", href: "/about" },
  { label: "Partner", href: "/partner" },
];

const NavbarTest = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const logout = async (e: any) => {
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

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#FFD600]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900 text-[#FFD600]">
              <span className="text-xs font-black tracking-tight">SE</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-gray-950">
                ElevateHub
              </h1>
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-gray-700 sm:block">
                Knowledge & Skill
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* User actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              aria-label="Notifications"
              className="relative rounded-xl p-2.5 text-gray-900 transition hover:bg-black/5"
            >
              <Bell size={20} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-[#FFD600] bg-red-500" />
            </button>

            <div className="hidden h-7 w-px bg-black/15 sm:block" />

            <button
              className="flex items-center gap-2 rounded-full p-1.5 transition hover:bg-black/5"
              aria-label="User profile"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-gray-700">
                <CircleUserRound size={25} />
              </div>
              <span className="hidden text-sm font-semibold text-gray-900 xl:block">
                Jensen Huang
              </span>
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenu((open) => !open)}
              className="rounded-xl border border-black/10 p-2.5 text-gray-900 hover:bg-black/5 lg:hidden"
              aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenu && (
          <div className="border-t border-black/10 bg-[#FFD600] px-5 pb-4 pt-2 lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-black/5"
                >
                  {item.label}
                  <ChevronRight size={16} />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default NavbarTest;
