import { CalendarCheck, Clock, CalendarX, Ban } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";

const stats = [
  {
    title: "Active Events",
    note: "Ongoing",
    icon: CalendarCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Pending Events",
    note: "Waiting approval",
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Ended Events",
    note: "Completed",
    icon: CalendarX,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Cancelled Events",
    note: "Cancelled by admin",
    icon: Ban,
    color: "bg-red-100 text-red-600",
  },
];

export default function EventStats() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(`${API_URL}/events/status/count`);
      const data = await response.json();
      setStatuses(data);
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {statuses.map((item) => {
        //   const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="bg-white rounded-[5px] p-4 shadow-sm border"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{item.name}</p>
                <h2 className="text-3xl font-bold mt-2">{item.total}</h2>
                <p className="text-xs text-gray-400 mt-1">{item.note}</p>
              </div>

              {/* <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
              >
                <Icon size={20} />
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
