import Avatar from "../../assets/icons/userAvatar.png";

const Navbar = ({ path }: any) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 shadow-sm">
        <div>{path}</div>
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="admin" className="w-[30px]" />
          <div>
            <p className="text-[13px] font-medium tracking-wide">
              Orlando Laurentinus
            </p>
            <p className="text-[11px] text-gray-400 font-medium">Admin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
