import { NavLink, Outlet, useParams } from "react-router-dom";

const OrganizerLayout = () => {
  const { slug } = useParams();

  return (
    <>
      <div className="border-b">
        <nav className="flex gap-8">
          <NavLink
            to={`/organizer/${slug}/about`}
            className={({ isActive }) =>
              `pb-3 ${
                isActive
                  ? "border-b-2 border-yellow-500 text-black text-[14px] font-medium"
                  : "text-gray-500 text-[14px]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to={`/organizer/${slug}/events`}
            className={({ isActive }) =>
              `pb-3 ${
                isActive
                  ? "border-b-2 border-yellow-500 text-black text-[14px] font-medium"
                  : "text-gray-500 text-[14px]"
              }`
            }
          >
            Events (58)
          </NavLink>

          {/*<NavLink
            to={`/organizer/${slug}/followers`}
            className={({ isActive }) =>
              `pb-4 ${
                isActive
                  ? "border-b-2 border-yellow-500 text-black"
                  : "text-gray-500"
              }`
            }
          >
            Followers
          </NavLink>

          <NavLink
            to={`/organizer/${slug}/reviews`}
            className={({ isActive }) =>
              `pb-4 ${
                isActive
                  ? "border-b-2 border-yellow-500 text-black"
                  : "text-gray-500"
              }`
            }
          >
            Reviews
          </NavLink>*/}
        </nav>
      </div>

      {/* Isi tab */}
      <div className="mt-3">
        <Outlet />
      </div>
    </>
  );
};

export default OrganizerLayout;
