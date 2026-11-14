import { useParams } from "react-router-dom";
import { useEventDetail } from "../../hooks/useEventDetail";
import { formatEventDate } from "../../../../utils/date";
import EventLocationModal from "../../../../components/EventDetail/EventLocationModal";
import { useState } from "react";

const Metadata = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="my-3 border p-3 rounded-[10px] shadow-md border-yellow-primer">
        <div className="flex gap-2">
          <div className="bg-gray-200 rounded-[10px] w-[45px] flex items-center justify-center">
            <p>📍</p>
          </div>
          {event?.locationType == "offline" ? (
            <div>
              <div className="text-[14px] tracking-wide">{event?.location}</div>
              <button
                onClick={() => setOpenModal(true)}
                className="text-[13px] font-medium underline tracking-wide"
              >
                See detail location
              </button>
              <EventLocationModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                location={event?.location}
              />
            </div>
          ) : (
            <div className="tracking-wide text-[15px] mt-[1px]">
              {event?.locationType} via zoom
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          {/* <CalendarClock width={15} /> */}
          <div className="bg-gray-200 w-[45px] h-[45px] flex items-center justify-center rounded-[10px]">
            <p>📆</p>
          </div>
          <div className="text-[14px] mt-[3px]">
            {formatEventDate(event?.startAt)} WIB
          </div>
        </div>
        <div className="flex gap-2 mt-2 items-center">
          {/* <Bookmark width={16} /> */}
          <div className="bg-gray-200 w-[45px] h-[45px] flex items-center justify-center rounded-[10px]">
            <p>🔖</p>
          </div>
          <button className="bg-yellow-primer px-3 py-[4px] rounded-[7px]">
            <p className="text-[14px] mt-[2px]">Add to calendar</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Metadata;
