import { useEffect, useState } from "react";
import EventCard from "../../../components/Admin/EventCard";
import { API_URL } from "../../../service/api";
import CreateEvent from "./CreateEvent";
import { CalendarCheck, Search } from "lucide-react";
import Pagination from "../../../components/Pagination";
import { useEvents, useStatusCount } from "./hooks/useEvents";

interface CategoryProps {
  id: number;
  name: string;
}

const Events = () => {
  const [openModel, setOpenModel] = useState(false);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const { events, currentPage, totalPages, setCurrentPage, totalEvents } =
    useEvents({
      status: selectedStatus,
      category: selectedCategory,
      search,
    });

  const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/category`);
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const { total: activeTotal } = useStatusCount("active");
  const { total: draftTotal } = useStatusCount("draft");

  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 border-b">
        <h1 className="text-[20px] font-medium">Event Management</h1>
        <button
          onClick={() => setOpenModel(true)}
          className="bg-gradient-to-r from-[#EC5B13] to-[#CF4D58] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm"
        >
          <p className="text-[12px] text-white">Create New Event +</p>
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2 flex gap-2">
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <CalendarCheck width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Events</p>
            </div>
            <h1 className="font-semibold">{totalEvents}</h1>
          </div>
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <CalendarCheck width={17} color="red" />
              </div>
              <p className="text-[12px]">Active</p>
            </div>
            <h1 className="font-semibold">{activeTotal}</h1>
          </div>
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <CalendarCheck width={17} color="red" />
              </div>
              <p className="text-[12px]">Draft</p>
            </div>
            <h1 className="font-semibold">{draftTotal || 0}</h1>
          </div>
        </div>
        <div className=" py-[12px] px-[12px] mb-2 rounded-[8px] bg-white border">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-3">
              <select
                className="w-[180px] bg-[#f1f5f9] px-3 py-[7px] outline-none text-[13px] rounded-[5px] appearance-none cursor-pointer"
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
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-[180px] bg-[#f1f5f9] outline-none px-3 py-[7px] text-[13px] rounded-[5px] appearance-none cursor-pointer"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="ended">Ended</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="bg-[#f1f5f9] py-[5px] px-[10px] rounded-l-[5px] shadow-sm">
                  <Search width={15} />
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  className="text-[14px] py-[6.5px] w-[200px] bg-[#f1f5f9] outline-none rounded-r-[5px]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {events.length === 0 ? (
            <p className="text-center text-gray-500 py-5">No events found</p>
          ) : (
            events.map((event) => (
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
            ))
          )}
        </div>
        <div className="flex justify-center pt-2 text-[14px]">
          <Pagination
            onNext={handleNext}
            onPrev={handlePrev}
            page={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
      {openModel && <CreateEvent onClose={() => setOpenModel(false)} />}
    </>
  );
};

export default Events;
