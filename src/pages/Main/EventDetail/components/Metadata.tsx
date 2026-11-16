import { CalendarDays, CalendarPlus, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { formatEventDate } from "../../../../utils/date";
import { useEventDetail } from "../../hooks/useEventDetail";

const Metadata = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");

  const isOffline = event?.locationType?.toLowerCase() === "offline";

  return (
    <section className="my-3 rounded-xl border border-yellow-primer  border-yellow-primer/60 bg-white p-4 shadow-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:pr-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-light text-yellow-secondary">
            <MapPin size={19} strokeWidth={2} />
          </span>
          <div className="min-w-0 pt-0.5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
              Location
            </p>
            <p className="mt-1 break-words text-sm font-medium text-gray-900">
              {isOffline
                ? event?.location || "Location to be announced"
                : "Online event"}
            </p>
          </div>
        </div>

        <div className="hidden h-12 w-px bg-gray-200 sm:block" />

        <div className="flex min-w-0 flex-1 items-start gap-3 sm:px-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-light text-yellow-secondary">
            <CalendarDays size={19} strokeWidth={2} />
          </span>
          <div className="min-w-0 pt-0.5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
              Date &amp; time
            </p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {formatEventDate(event?.startAt)}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3 sm:border-0 sm:pl-5 sm:pt-0">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-primer px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-secondary sm:w-auto"
          >
            <CalendarPlus size={17} />
            Add to calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Metadata;
