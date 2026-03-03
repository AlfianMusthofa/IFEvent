import { Clock } from "lucide-react";
import { formatEventDate } from "../../utils/date";

interface UpcomingEventCardProps {
  image: string;
  title: string;
  date: string;
}

const UpcomingEvents = ({ title, date, image }: UpcomingEventCardProps) => {
  return (
    <>
      <div className=" rounded-t-[5px] max-w-[200px] border rounded-b-[5px]">
        <img
          src={image}
          className="w-full h-[100px] object-cover rounded-t-[5px]"
        />
        <div className="p-2">
          <p className="text-[13px] tracking-wide font-medium line-clamp-1">
            {title}
          </p>
          <div className="flex items-center gap-1 mt-[1px]">
            <div>
              <Clock width={11} className="text-gray-400" />
            </div>
            <p className="text-[12px] font-normal text-gray-400">
              {formatEventDate(date)} WIB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
