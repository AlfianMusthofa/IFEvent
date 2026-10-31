import { useMemo, useState } from "react";
import {
  Menu,
  X,
  Search,
  Bell,
  ChevronRight,
  LayoutDashboard,
  CalendarDays,
  Newspaper,
  Info,
  Handshake,
  CircleUserRound,
  Camera,
  Settings,
  ArrowUpRight,
  Trophy,
  CalendarCheck,
  Star,
  Award,
  Ticket,
  Video,
  Download,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import NavbarTest from "../../components/navbarTest";
import ProfileCard from "./components/profileCard";
import Statistic from "./components/statistic";
import HistoryTable from "./components/historyTable";

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
  {
    id: 2,
    name: "Exclusive Talk: Scaling Your Startup in a Post-Digital Era",
    date: "28 Apr 2026",
    time: "09:00 WIB",
    status: "Ended",
    type: "Ticket",
    certificate: false,
    reviewed: false,
  },
  {
    id: 3,
    name: "Workshop: Public Speaking & Teknik Presentasi",
    date: "06 Mar 2026",
    time: "09:00 WIB",
    status: "Ended",
    type: "Video",
    certificate: true,
    reviewed: true,
  },
];

const TestDashboard = () => {
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

  function downloadCertificate(event) {
    // Hubungkan ke URL sertifikat dari backend.
    window.alert(`Hubungkan download sertifikat: ${event.name}`);
  }

  return (
    <>
      <div className="min-h-screen bg-[#F7F8FA] text-gray-900">
        <NavbarTest />
        <main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          <ProfileCard />
          <Statistic />

          {/* Event history */}
          <HistoryTable />

          <footer className="mt-8 flex flex-col justify-between gap-2 pb-4 text-xs text-gray-400 sm:flex-row">
            <p>© 2026 SAKTIEvent. Knowledge & Skill.</p>
            <p>Learn · Connect · Grow</p>
          </footer>
        </main>

        {/* Review modal */}
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
      </div>
    </>
  );
};

export default TestDashboard;
