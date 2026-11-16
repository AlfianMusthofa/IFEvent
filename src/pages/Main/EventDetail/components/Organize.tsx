import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/icons/logo.png";

interface OrganizerProps {
  link: string | null;
  name: string | null;
}

const Organize = ({ link, name }: OrganizerProps) => {
  return (
    <div className="border p-3 rounded-[10px] mt-3 shadow-md border-yellow-primer">
      <h1 className="tracking-wide font-medium">Organized by</h1>
      <div className="py-3 mt-3 flex items-center justify-between  rounded-[10px]">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-[50px]" />
          <NavLink to={`/organizer/${link}`}>
            <p className="text-[15px] tracking-wide mt-1 font-medium">
              {name ?? "Not added yet!"}
            </p>
          </NavLink>
        </div>
        <div className="bg-yellow-primer px-5 py-1.5 rounded-[6px]">
          <p className="text-[13px]">+ Follow</p>
        </div>
      </div>
    </div>
  );
};

export default Organize;
