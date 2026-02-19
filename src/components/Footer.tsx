import location from "../assets/icons/location.png";
import whatsapp from "../assets/icons/whatsapp.png";
import email from "../assets/icons/email.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import tiktok from "../assets/icons/tiktok.png";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-primer">
        <div className="max-w-[1029px] mx-auto text-black py-[30px] flex justify-between">
          <div className="col">
            <h3 className="text-3xl font-semibold tracking-wide">ElevateHub</h3>
            <div className="my-[20px] w-[570px]">
              <p>
                ElevateHub is an inspirational educational event organizer
                platform
              </p>
              <p>
                We offer practical seminars and trainings to support your career
                development, skills and technology insights.
              </p>
            </div>
            {/* <p className="text-[18px] font-semibold tracking-wide">
              Informatika UIN Sunan Gunung Djati Bandung
            </p> */}
            <div className="my-[20px] flex flex-col gap-[15px]">
              <div className="flex items-center gap-[5px]">
                <img src={location} className="w-[25px]" />
                <p>Cibiru, Bandung, West Java 40614</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <img src={whatsapp} className="w-[20px]" />
                <p>0851-1717-3581</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <img src={email} className="w-[20px]" />
                <p>info@elevatehub.co.id</p>
              </div>
            </div>
          </div>
          <div>
            <div className="col flex flex-col gap-[7px]">
              <a href="#" className="underline">
                Home
              </a>
              <a href="#" className="underline">
                Event
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
