import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";
import { BadgeCheck } from "lucide-react";

export default function Active() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(`${API_URL}/status/count/active`);
      const data = await response.json();
      setStatuses(data);
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-white rounded-[5px] p-4 shadow-sm border flex-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Active</p>
          <h2 className="text-3xl font-bold mt-2">{statuses.total}</h2>
          <p className="text-xs text-gray-400 mt-1">ya</p>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-300">
          <BadgeCheck width={20} color="white" />
        </div>
      </div>
    </div>
  );
}
