import { MapPin, TicketCheck, UsersRound } from "lucide-react";
import Logo from "../../../assets/icons/logo.png";

interface HeroProps {
  name: string;
  descrtiption: string;
  total_events: number;
  followers: number;
  location: string;
}

const Hero = ({
  name,
  descrtiption,
  total_events,
  followers,
  location,
}: HeroProps) => {
  return (
    <>
      <div className="breadcrumbs text-sm mt-3 mb-1">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Organizer</a>
          </li>
          <li>
            <li>Elevate Comunity</li>
          </li>
        </ul>
      </div>
      <div className="organizer-hero-bg text-white p-4 rounded-[8px]">
        <div className="flex gap-4">
          <img src={Logo} alt="logo" className="h-[100px] w-[100px]" />
          <div>
            <h1 className="text-[25px] font-medium">{name}</h1>
            <p className="text-[13px] mb-2.5">
              Inspiring people to learn, grow and elevate their future.
            </p>
            <p className="text-[13px] w-[400px]">{descrtiption}</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-10">
          <div className="flex items-center gap-3">
            <UsersRound color="yellow" width={25} />
            <div>
              <p className="text-[14px]">{followers}</p>
              <p className="text-[12px]">Followers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TicketCheck color="yellow" width={25} />
            <div>
              <p className="text-[14px]">{total_events}</p>
              <p className="text-[12px]">Events</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin color="yellow" width={25} />
            <div>
              <p className="text-[14px]">{location}</p>
              <p className="text-[12px]">Based</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <button className="bg-yellow-primer text-black rounded-[5px]">
            <h2 className="text-[13px] px-7 py-1.5">+ Follow</h2>
          </button>
          <div className="bg-white text-black rounded-[5px]">
            <h2 className="text-[13px] px-7 py-1.5">Contact Organizer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
