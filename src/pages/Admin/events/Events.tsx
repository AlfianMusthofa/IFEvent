import { useEffect, useState } from "react";
import EventCard from "../../../components/Admin/EventCard";
import Navbar from "../../../components/Admin/Navbar";
import { API_URL } from "../../../service/api";
import CreateEvent from "./CreateEvent";

interface EventsProps {
  id: number;
  image: string;
  category: string;
  title: string;
  locationType: string;
  startAt: string;
  description: string;
  registered_count: number;
  capacity: number;
  name: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventsProps[]>([]);
  const [statuses, setStatuses] = useState([]);
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    const getEvent = async () => {
      const resposne = await fetch(`${API_URL}/events?limit=4`);
      const data = await resposne.json();
      setEvents(data.data);
    };

    const fetchStats = async () => {
      const response = await fetch(`${API_URL}/events/status/count`);
      const data = await response.json();
      setStatuses(data);
    };

    fetchStats();
    getEvent();
  }, []);

  return (
    <>
      <Navbar path="Events" />
      <div className="my-4 flex justify-between items-center">
        <div className="flex gap-2">
          {statuses.map((stat) => (
            <div key={stat.id} className="bg-white px-6 py-2 rounded-full">
              <p className="text-[12px]">
                {stat.name} ({stat.total})
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className=" bg-white px-6 py-2 rounded-full text-[12px]"
            >
              All Category
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow mt-2"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setOpenModel(true)}
            className="bg-green-400 px-5 py-2 rounded-full cursor-pointer"
          >
            <p className="text-[12px] text-white">Create Event +</p>
          </button>
        </div>
      </div>

      {/* Event Card */}
      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            category={event.Category.name}
            title={event.title}
            description={event.description}
            location={event.location}
            time={event.startAt}
            registered_count={event.registered_count}
            capacity={event.capacity}
            locationType={event.locationType}
            id={event.id}
          />
        ))}
      </div>
      {openModel && <CreateEvent onClose={() => setOpenModel(false)} />}
    </>
  );
};

export default Events;
