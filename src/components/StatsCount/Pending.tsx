import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";
import { BadgeAlert } from "lucide-react";

export default function Pending() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(`${API_URL}/status/count/pending`);
      const data = await response.json();
      setStatuses(data);
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-white rounded-[5px] p-4 shadow-sm border flex-1 border-b-4 border-b-yellow-primer">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-[20px] font-bold mt-2">{statuses.total}</h2>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-300">
          <BadgeAlert width={20} color="white" />
        </div>
      </div>
    </div>
  );
}
