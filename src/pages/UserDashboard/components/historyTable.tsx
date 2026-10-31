import {
  CalendarDays,
  CheckCircle2,
  Download,
  MapPin,
  Search,
  Star,
  Ticket,
  Video,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useHistory } from "../hook/useHistory";

const events = [
  {
    id: 1,
    name: "Advanced UI/UX & Human-Computer Interaction (HCI)",
    date: "15 Aug 2026",
    time: "09:00 WIB",
    status: "Ended",
    type: "Ticket",
    certificate: false,
    reviewed: false,
  },
];

const HistoryTable = () => {
  //   const { events, page, setPage, totalPages, count } = useHistory();

  const [search, setSearch] = useState("");
  const [reviewEvent, setReviewEvent] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const [reviewedEvents, setReviewedEvents] = useState(
    events.filter((event) => event.reviewed).map((event) => event.id),
  );

  const filteredEvents = useMemo(() => {
    const query = search.toLowerCase().trim();

    return events.filter((event) =>
      `${event.name} ${event.date} ${event.status} ${event.type}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  function downloadCertificate(event) {
    window.alert(`Hubungkan download sertifikat: ${event.name}`);
  }

  function submitReview() {
    if (!reviewEvent || !reviewText.trim()) return;

    setReviewedEvents((previous) =>
      previous.includes(reviewEvent.id)
        ? previous
        : [...previous, reviewEvent.id],
    );

    setReviewEvent(null);
    setReviewText("");
  }

  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:p-7 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5B8] text-gray-900">
              <CalendarDays size={21} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Event History</h2>
              <p className="mt-1 text-xs text-gray-500">
                Your events, participation, and certificates
              </p>
            </div>
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              aria-label="Search events"
              className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#D6B500] focus:bg-white focus:ring-4 focus:ring-[#FFD600]/15"
            />
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-[#FAFAFA] text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
                <th className="px-6 py-4">Event</th>
                <th className="px-5 py-4">Date & Time</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Location</th>
                <th className="px-5 py-4">Certificate</th>
                <th className="px-6 py-4 text-right">Review</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredEvents.map((event) => {
                const isReviewed = reviewedEvents.includes(event.id);

                return (
                  <tr key={event.id} className="transition hover:bg-[#FFFCED]">
                    <td className="max-w-[310px] px-6 py-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                          {event.type === "Video" ? (
                            <Video size={17} />
                          ) : (
                            <Ticket size={17} />
                          )}
                        </div>
                        <p className="text-sm font-semibold leading-6 text-gray-800">
                          {event.title}
                        </p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-5 py-5">
                      <p className="text-sm font-medium text-gray-700">
                        {event.date}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">{event.time}</p>
                    </td>

                    <td className="px-5 py-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                        <CheckCircle2 size={13} />
                        {event.status}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                        {event.type === "Video" ? (
                          <Video size={14} />
                        ) : (
                          <Ticket size={14} />
                        )}
                        {event.type}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      {event.certificate ? (
                        <button
                          onClick={() => downloadCertificate(event)}
                          aria-label={`Download certificate for ${event.name}`}
                          className="rounded-lg border border-gray-200 p-2.5 text-gray-600 transition hover:border-[#E4C000] hover:bg-[#FFF5B8]"
                        >
                          <Download size={17} />
                        </button>
                      ) : (
                        <span className="text-sm text-gray-300">—</span>
                      )}
                    </td>

                    <td className="px-6 py-5 text-right">
                      {isReviewed ? (
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                          <CheckCircle2 size={14} />
                          Reviewed
                        </span>
                      ) : (
                        <button
                          onClick={() => setReviewEvent(event)}
                          className="rounded-lg border border-[#E5C000] px-4 py-2 text-xs font-semibold text-gray-800 transition hover:bg-[#FFD600]"
                        >
                          Review
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 p-4 md:hidden">
          {filteredEvents.map((event) => {
            const isReviewed = reviewedEvents.includes(event.id);

            return (
              <article
                key={event.id}
                className="rounded-2xl border border-gray-100 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF5B8] text-gray-800">
                    {event.type === "Video" ? (
                      <Video size={18} />
                    ) : (
                      <Ticket size={18} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold leading-5">
                      {event.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">
                      {event.date} · {event.time}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
                    {event.status}
                  </span>
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                    {event.type}
                  </span>
                  {event.certificate && (
                    <button
                      onClick={() => downloadCertificate(event)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium"
                    >
                      <Download size={14} /> Certificate
                    </button>
                  )}
                </div>

                <div className="mt-4 border-t border-gray-100 pt-3">
                  {isReviewed ? (
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-700">
                      <CheckCircle2 size={15} /> Reviewed
                    </span>
                  ) : (
                    <button
                      onClick={() => setReviewEvent(event)}
                      className="w-full rounded-xl bg-[#FFD600] px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-yellow-400"
                    >
                      Write a Review
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="px-6 py-16 text-center">
            <Search size={30} className="mx-auto mb-3 text-gray-300" />
            <h3 className="font-semibold text-gray-800">No events found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try searching with a different keyword.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2 border-t border-gray-100 bg-[#FAFAFA] px-5 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p>
            Showing {filteredEvents.length} of {events.length} displayed events
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin size={13} />
            All times are in Western Indonesia Time (WIB)
          </p>
        </div>

        {reviewEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50 p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setReviewEvent(null);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-title"
              className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF5B8]">
                    <Star size={22} />
                  </div>
                  <h2 id="review-title" className="text-xl font-bold">
                    Review Event
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Share your experience with this event.
                  </p>
                </div>

                <button
                  onClick={() => setReviewEvent(null)}
                  aria-label="Close review"
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm font-semibold leading-6">
                  {reviewEvent.name}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {reviewEvent.date} · {reviewEvent.time}
                </p>
              </div>

              <label
                htmlFor="review-text"
                className="mt-5 block text-sm font-semibold"
              >
                Your feedback
              </label>
              <textarea
                id="review-text"
                rows={4}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Tell us what you liked about this event..."
                className="mt-2 w-full resize-y rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-[#D6B500] focus:ring-4 focus:ring-[#FFD600]/15"
              />

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={() => setReviewEvent(null)}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={submitReview}
                  disabled={!reviewText.trim()}
                  className="rounded-xl bg-[#FFD600] px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HistoryTable;
