import { useParams } from "react-router-dom";
import { useEventDetail } from "../../hooks/useEventDetail";
import CountdownItem from "./CountdownItem";
import { useCountdown } from "../../hooks/useCountdown";

const Countdown = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");
  const { days, hours, minutes, seconds } = useCountdown(event?.startAt);

  return (
    <>
      <div className="px-4 py-3 border rounded-[10px] mt-3 border-yellow-primer shadow-md">
        <h2 className="text-[15px] font-semibold tracking-wide">
          Event start in
        </h2>
        <div className="flex items-center gap-3.5 mt-3">
          <CountdownItem value={days} label="Days" />
          <CountdownItem value={hours} label="Hours" />
          <CountdownItem value={minutes} label="Minutes" />
          <CountdownItem value={seconds} label="Seconds" />
        </div>
      </div>
    </>
  );
};

export default Countdown;
