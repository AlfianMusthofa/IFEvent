import Instagram from "../../../assets/icons/instagram.png";
import facebook from "../../../assets/icons/facebook3.png";
import yt from "../../../assets/icons/yt.png";

const Social = () => {
  return (
    <div className="border  p-3 rounded-[6px]">
      <h1 className="text-[15px] font-medium">Find Us On</h1>
      <div className="mt-2.5 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <img src={Instagram} alt="ins" className="w-[25px]" />
          <p className="text-[14px]">@elevate.comunity</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={facebook} alt="ins" className="w-[25px]" />
          <p className="text-[14px]">@elevate.comunity</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={yt} alt="ins" className="w-[25px]" />
          <p className="text-[14px]">Elevate Academy</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
