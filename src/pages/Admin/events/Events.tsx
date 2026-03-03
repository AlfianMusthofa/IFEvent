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
  location: string;
}

interface StatusesProps {
  id: number;
  name: string;
  total: number;
}

interface CategoryProps {
  id: number;
  name: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventsProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statuses, setStatuses] = useState<StatusesProps[]>([]);
  const [openModel, setOpenModel] = useState(false);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");

  const getEvent = async (pageNumber = 1, searchValue = search) => {
    const params = new URLSearchParams({
      limit: "4",
      page: String(pageNumber),
    });

    if (selectedCategory) {
      params.append("category", selectedCategory);
    }

    if (searchValue) {
      params.append("search", searchValue);
    }

    const resposne = await fetch(`${API_URL}/events?${params.toString()}`);
    const data = await resposne.json();
    setEvents(data.data);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
  };

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(`${API_URL}/events/status/count`);
      const data = await response.json();
      setStatuses(data);
    };

    const fetchCategories = async () => {
      const response = await fetch(`${API_URL}/category`);
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
    fetchStats();
  }, []);

  useEffect(() => {
    getEvent(page);
  }, [page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getEvent(1);
      setPage(1);
    }, 500);
    return () => clearTimeout(timeout);
  }, [search, selectedCategory]);

  return (
    <>
      <Navbar path="Events" />
      <div className="my-4 flex justify-between items-center">
        <div className="flex gap-2">
          {statuses.map((stat) => (
            <div key={stat.id} className="bg-white px-6 py-2 rounded-[5px]">
              <p className="text-[12px]">
                {stat.name} ({stat.total})
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="text-[14px] py-[6px] px-[10px] rounded-[5px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-[180px] px-3 py-[7px] text-[13px] rounded-[5px] appearance-none cursor-pointer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => setOpenModel(true)}
            className="bg-green-400 px-3 py-2 rounded-[5px] cursor-pointer"
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
            status={event.status.name}
          />
        ))}
      </div>
      <div className="text-[14px]">
        <div className="flex items-center gap-2 mt-4 justify-center">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-sm">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      {openModel && <CreateEvent onClose={() => setOpenModel(false)} />}
    </>
  );
};

export default Events;
