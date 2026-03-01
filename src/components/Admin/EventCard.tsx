import { CalendarCheck, MapPin, SquarePen, Trash2 } from "lucide-react";
import { formatEventDate } from "../../utils/date";
import { useState } from "react";
import UpdateEvent from "../../pages/Admin/events/UpdateEvent";

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  location: string;
  time: string;
  registered_count: number;
  capacity: number;
  locationType: string;
  status: string;
}

const EventCard = ({
  id,
  image,
  title,
  category,
  description,
  time,
  registered_count,
  capacity,
  locationType,
  status,
}: EventCardProps) => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  return (
    <>
      <div className="bg-white p-3 rounded-lg flex justify-between items-center">
        <div className="flex gap-3">
          <div className="relative w-[130px] h-[80px]">
            <img
              src={image}
              alt="cover"
              className=" h-full w-full object-cover rounded-lg"
            />
            <div className="absolute top-1 left-1 bg-yellow-primer text-[11px] px-2 py-[2px] rounded-badge tracking-wide">
              <p>{status}</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] flex">{category}</p>
            <div className=" font-medium w-[210px]">
              <h3 className="line-clamp-1">{title}</h3>
            </div>
            <div className="w-[300px]">
              <p
                className="line-clamp-2 text-[11px]"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <div className="flex items-center gap-1">
              <MapPin width={13} />
              <p className="text-[13px] w-[80px] line-clamp-1">
                {locationType}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarCheck width={13} />
              <p className="text-[12px]">{formatEventDate(time)} WIB</p>
            </div>
          </div>
          <div>
            {/* <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-[50%]" />
            </div> */}
            <div className="flex items-center gap-1 mt-1">
              <h1 className="font-semibold">
                {(registered_count / capacity) * 100}%
              </h1>
              <p className="text-[10px]">Capacity</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenModalUpdate(true)}
              className="bg-green-400 py-1 px-[8px] rounded-full"
            >
              <SquarePen width={17} color="white" />
            </button>
            <div className="bg-red-400 py-1 px-[8px] rounded-full cursor-pointer">
              <Trash2 width={17} color="white" />
            </div>
          </div>
        </div>
      </div>
      {openModalUpdate && (
        <UpdateEvent onClose={() => setOpenModalUpdate(false)} id={id} />
      )}
    </>
  );
};

export default EventCard;
