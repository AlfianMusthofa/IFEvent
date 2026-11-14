import CapacityBar from "../../components/CapacityBar";
import { useParams } from "react-router-dom";
import { useEventDetail } from "../../hooks/useEventDetail";

const Capacity = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");

  return (
    <div className="px-4 py-3 border rounded-[10px] mt-3 border-yellow-primer shadow-md">
      <CapacityBar
        registered={event?.registered_count ?? 0}
        capacity={event?.capacity ?? 0}
      />
    </div>
  );
};

export default Capacity;
