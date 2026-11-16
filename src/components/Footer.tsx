import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";
import youtube from "../assets/icons/youtube.png";

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Articles", to: "/article" },
  { label: "About us", to: "/about" },
  { label: "Partners", to: "/partners" },
];

const socialLinks = [
  { label: "Facebook", image: facebook },
  { label: "Instagram", image: instagram },
  { label: "YouTube", image: youtube },
  { label: "TikTok", image: tiktok },
];

const Footer = () => {
  return (
    <footer className="bg-yellow-primer text-white">
      <div className="mx-auto grid max-w-[1029px] grid-cols-1 gap-9 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:py-12 lg:grid-cols-4 lg:px-0">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-primer text-lg font-bold text-black">
              E
            </span>
            <span className="text-2xl font-semibold tracking-wide">
              Elevate<span className="text-yellow-primer">Hub</span>
            </span>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-300">
            An educational event platform for practical seminars, training,
            career development, and technology insights.
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-yellow-primer"
              >
                <img
                  src={social.image}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-yellow-primer">
            Explore
          </h2>
          <nav className="mt-4 flex flex-col items-start gap-3">
            {siteLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-yellow-primer">
            Account &amp; legal
          </h2>
          <nav className="mt-4 flex flex-col items-start gap-3">
            <Link
              to="/login"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Log in
            </Link>
            <a
              href="#"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Terms of service
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1029px] flex-col gap-2 px-4 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-0">
          <p>© 2026 ElevateHub. All rights reserved.</p>
          <p>
            Made with <span className="text-yellow-primer">♥</span> for curious
            minds.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
