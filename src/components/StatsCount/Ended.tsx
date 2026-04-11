import { CircleCheck } from "lucide-react";
import { useStatusCount } from "../../pages/Admin/events/hooks/useEvents";

interface Ended {
  id: number;
  total: number;
}

export default function Ended() {
  const { total } = useStatusCount("ended");

  return (
    <div className="bg-white rounded-[5px] p-4 shadow-sm border flex-1 border-b-4 border-b-green-400">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Ended</p>
          <h2 className="text-[20px] font-bold mt-2">{total}</h2>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-300">
          <CircleCheck width={20} color="white" />
        </div>
      </div>
    </div>
  );
}
