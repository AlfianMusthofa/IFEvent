import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import tiktok from "../assets/icons/tiktok.png";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-primer">
        <div className="max-w-[1029px] mx-auto text-black py-[50px] flex justify-between">
          <div className="col">
            <h3 className="text-3xl font-semibold tracking-wide">ElevateHub</h3>
            <div className="my-[20px] w-[570px]">
              <p className="text-[15px]">
                ElevateHub is an inspirational educational event organizer
                platform
              </p>
              <p className="text-[15px]">
                We offer practical seminars and trainings to support your career
                development, skills and technology insights.
              </p>
            </div>
            {/* Social media button */}
            <div className="flex mt-[15px] gap-[20px]">
              <div className="bg-white p-[6px] rounded-full">
                <a href="#">
                  <img src={facebook} className="w-[25px]" />
                </a>
              </div>
              <div className="bg-white p-[6px] rounded-full">
                <a href="/" target="_blank">
                  <img src={instagram} className="w-[25px]" />
                </a>
              </div>
              <div className="bg-white p-[6px] rounded-full">
                <a href="/" target="_blank">
                  <img src={youtube} className="w-[25px]" />
                </a>
              </div>
              <div className="bg-white p-[6px] rounded-full">
                <a href="#">
                  <img src={tiktok} className="w-[25px]" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-3">Site Map</h2>
            <div className="text-[15px] col flex flex-col gap-[7px]">
              <a href="#" className="underline">
                Homepages
              </a>
              <a href="#" className="underline">
                Technology
              </a>
              <a href="#" className="underline">
                History
              </a>
              <a href="#" className="underline">
                About
              </a>
              <a href="#" className="underline">
                LogIn
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-3">Legal</h2>
            <div className="text-[15px] col flex flex-col gap-[7px]">
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Term of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-secondary">
        <div className="container text-[13px] mx-auto text-black font-medium py-[15px] flex justify-center gap-[40px]">
          <p>2026 - Supported by myself</p>
          <a href="#" className="hover:underline">
            Developed by 💖
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
