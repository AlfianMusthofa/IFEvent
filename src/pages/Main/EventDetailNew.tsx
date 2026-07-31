import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { CalendarClock, MapPin, Bookmark } from "lucide-react";
import { formatEventDate } from "../../utils/date";
import Footer from "../../components/Footer";
import EventLocationModal from "../../components/EventDetail/EventLocationModal";
import Instagram from "../../assets/icons/instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import Link from "../../assets/icons/link.png";
import { useEventDetail } from "./hooks/useEventDetail";
import { useState } from "react";
import CapacityBar from "./components/CapacityBar";
import { useCountdown } from "./hooks/useCountdown";
import CountdownItem from "./components/CountdownItem";
import Logo from "../../assets/icons/logo.png";
import FAQAccordion from "./components/ FAQAccordion";
import { NavLink } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "Apakah saya mendapatkan sertifikat?",
    answer:
      "Ya. Semua peserta yang mengikuti event hingga selesai akan mendapatkan e-certificate.",
  },
  {
    id: 2,
    question: "Apakah ada recording?",
    answer: "Ya. Recording akan dikirim maksimal H+2 setelah event selesai.",
  },
  {
    id: 3,
    question: "Bagaimana cara mengikuti event?",
    answer: "Link Zoom akan dikirim melalui email setelah registrasi berhasil.",
  },
  {
    id: 4,
    question: "Apakah bisa refund?",
    answer: "Refund mengikuti kebijakan masing-masing event.",
  },
];

const EventDetailNew = () => {
  const { slug } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { handleJoin, joined, event } = useEventDetail(slug ?? "");

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID").format(number);
  };

  const { days, hours, minutes, seconds } = useCountdown(event?.startAt);

  return (
    <>
      <Navbar />
      <div className="max-w-[1029px] mx-auto">
        <div className="flex justify-between my-4 gap-3">
          <div className="max-w-[640px]">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Events</a>
                </li>
                <li>
                  <li>{event?.title}</li>
                </li>
              </ul>
            </div>
            <h1 className="text-[25px] font-medium tracking-wide line-clamp-2 border p-3 rounded-[10px]">
              {event?.title}
            </h1>
            <div className="my-3 border p-3 rounded-[10px]">
              <div className="flex gap-2">
                <MapPin width={16} />
                {event?.locationType == "offline" ? (
                  <div>
                    <div className="text-[14px] tracking-wide">
                      {event?.location}
                    </div>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="text-[13px] font-medium underline tracking-wide"
                    >
                      See detail location
                    </button>
                    <EventLocationModal
                      open={openModal}
                      onClose={() => setOpenModal(false)}
                      location={event?.location}
                    />
                  </div>
                ) : (
                  <div className="tracking-wide text-[15px] mt-[1px]">
                    {event?.locationType} via zoom
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <CalendarClock width={15} />
                <div className="text-[14px] mt-[3px]">
                  {formatEventDate(event?.startAt)} WIB
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <Bookmark width={16} />
                <p className="text-[14px] mt-[2px]">Add to calendar</p>
              </div>
            </div>
            <div className=" border p-3 rounded-[10px]">
              <p className="tracking-wide font-medium">About this event</p>
              <p
                className={`
                              text-[14px] font-light tracking-wide
                              [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1
                              ${expanded ? "" : "line-clamp-4"}
                           `}
                dangerouslySetInnerHTML={{
                  __html: event?.description ?? "",
                }}
              />

              {/* BUTTON */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-1 text-sm text-blue-600 hover:underline"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
            <div className="border my-5"></div>
            <div>
              <h1 className="tracking-wide font-medium">About Mentor</h1>
              <div className="mt-1 flex gap-4 items-center">
                <img
                  src={event?.Mentor.image}
                  className="w-[100px] h-[100px] rounded-[13px]"
                />
                <div>
                  <p className="text-[16px]">{event?.Mentor.name}</p>
                  <p className="text-[13px]">{event?.Mentor.position}</p>
                  <p
                    className="text-[13px] font-light"
                    dangerouslySetInnerHTML={{
                      __html: event?.Mentor.bio || "",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="border my-5"></div>
            <div>
              <h1 className="tracking-wide font-medium ">Organized by</h1>
              <div className="bg-gray-100 px-4 py-3 mt-3 flex items-center justify-between  rounded-[10px]">
                <div className="flex items-center gap-3">
                  <img src={Logo} alt="logo" className="w-[50px]" />
                  <NavLink to={`/organizer/${event?.Organizer.slug}`}>
                    <p className="text-[15px] tracking-wide mt-1 font-medium">
                      {event?.Organizer.name ?? "Not added yet!"}
                    </p>
                  </NavLink>
                </div>
                <div className="bg-yellow-primer px-5 py-1.5 rounded-[6px]">
                  <p className="text-[13px]">+ Follow</p>
                </div>
              </div>
            </div>
            <div className="border my-5"></div>
            <FAQAccordion faqs={faqs} />
            <div className="border my-5"></div>
            <div>
              <h1 className="tracking-wide font-medium">
                Important information when ordering at ElevateHub
              </h1>
              <ul className="list-disc list-inside mt-1">
                <li className="text-[13px] font-light tracking-wide">
                  You will receive instructions to participate in the Online
                  Event.
                </li>
                <li className="text-[13px] font-light tracking-wide mt-1">
                  Please prepare the required data and other information before
                  ordering tickets.
                </li>
              </ul>
            </div>
            <div className="border my-5"></div>
            <div>
              <h1 className="tracking-wide font-medium">
                There is something wrong?
              </h1>
              <p className="text-[13px] font-light tracking-wide mt-1">
                If any problems occur, please contact our help center.
              </p>
            </div>
          </div>
          <div>
            <img
              src={event?.image}
              className="w-[450px] h-[200px] object-cover rounded-[10px]"
            />
            <div className="mt-5 px-4 py-3 flex items-center justify-between border rounded-[10px]">
              {event?.priceType == "free" ? (
                <h2 className="text-[16px] font-semibold tracking-wide">
                  Free
                </h2>
              ) : (
                <h2 className="text-[15px] font-medium">
                  IDR {formatRupiah(event?.price ?? 0)}
                </h2>
              )}

              <button
                onClick={handleJoin}
                disabled={joined}
                className={`px-7 py-2 rounded-[6px] transition
                  ${
                    joined
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-primer hover:opacity-90"
                  }
               `}
              >
                <h2 className="text-[15px] font-medium">
                  {joined ? "Registered" : "Register Now"}
                </h2>
              </button>
            </div>
            <div className="px-4 py-3 border rounded-[10px] mt-3">
              <CapacityBar
                registered={event?.registered_count ?? 0}
                capacity={event?.capacity ?? 0}
              />
            </div>
            <div className="px-4 py-3 border rounded-[10px] mt-3">
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
            <div className="border my-5"></div>
            <div>
              <p className="text-[12px]">
                Share it with the people you're going to invite!
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#">
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="w-[35px]"
                    loading="lazy"
                  />
                </a>
                <a href="#">
                  <img
                    src={Facebook}
                    alt="instagram"
                    className="w-[35px]"
                    loading="lazy"
                  />
                </a>
                <a href="#">
                  <img
                    src={Link}
                    alt="instagram"
                    className="w-[45px]"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default EventDetailNew;
