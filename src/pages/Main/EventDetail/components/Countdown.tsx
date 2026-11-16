import { CalendarCheck2, Clock3 } from "lucide-react";
import { useParams } from "react-router-dom";
import { useCountdown } from "../../hooks/useCountdown";
import { useEventDetail } from "../../hooks/useEventDetail";
import CountdownItem from "./CountdownItem";

const Countdown = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");
  const timeLeft = useCountdown(event?.startAt);
  const hasStarted =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="mt-3 rounded-xl border  border-l-4 border-yellow-primer bg-white p-3 shadow-md sm:p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-light text-yellow-secondary">
            <Clock3 size={18} />
          </span>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-gray-900 sm:text-[15px]">
              Event starts in
            </h2>
            <p className="text-xs text-gray-500">Counting down to the start</p>
          </div>
        </div>

        {event && timeLeft && !hasStarted && (
          <span className="shrink-0 rounded-full bg-yellow-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-700">
            Upcoming
          </span>
        )}
      </div>

      {!event ? (
        <p className="mt-4 text-sm text-gray-500">Loading event schedule…</p>
      ) : !timeLeft ? (
        <p className="mt-4 text-sm text-gray-500">
          Event schedule is not available yet.
        </p>
      ) : hasStarted ? (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-3 text-sm font-medium text-green-800">
          <CalendarCheck2 size={18} />
          This event has started
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-2.5">
          <CountdownItem value={timeLeft.days} label="Days" />
          <CountdownItem value={timeLeft.hours} label="Hours" />
          <CountdownItem value={timeLeft.minutes} label="Minutes" />
          <CountdownItem value={timeLeft.seconds} label="Seconds" />
        </div>
      )}
    </div>
  );
};

export default Countdown;
