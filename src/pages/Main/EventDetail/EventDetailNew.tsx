import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/Footer";
import { useEventDetail } from "../hooks/useEventDetail";
import { useState } from "react";
import CapacityBar from "../components/CapacityBar";
import { NavLink } from "react-router-dom";
import FAQAccordion from "./components/ FAQAccordion";
import Logo from "../../../assets/icons/logo.png";
import Metadata from "./components/Metadata";
import Countdown from "./components/Countdown";
import AboutMentor from "./components/AboutMentor";
import Capacity from "./components/Capacity";
import RegisterBtn from "./components/RegisterBtn";

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

  const { event } = useEventDetail(slug ?? "");

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
            <div className="border p-3 rounded-[10px] mt-3 border-yellow-primer shadow-md">
              <p className="text-[12px] tracking-wide bg-yellow-primer w-fit px-3 py-1 rounded-full">
                {event?.Category?.name}
              </p>
              <h1 className="text-[25px] font-medium tracking-wide line-clamp-2 mt-2">
                {event?.title}
              </h1>
            </div>
            <Metadata />
            <div className="border p-3 rounded-[10px] mb-3 shadow-md border-yellow-primer">
              <div className="flex items-center gap-2.5 mb-2">
                {/* <div className="bg-yellow-primer w-[7px] text-yellow-primer rounded-full">
                  a
                </div> */}
                <p className="tracking-wide font-medium">About this event</p>
              </div>
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
            <AboutMentor />
            <div className="border p-3 rounded-[10px] mt-3 shadow-md border-yellow-primer">
              <h1 className="tracking-wide font-medium">Organized by</h1>
              <div className="py-3 mt-3 flex items-center justify-between  rounded-[10px]">
                <div className="flex items-center gap-3">
                  <img src={Logo} alt="logo" className="w-[50px]" />
                  <NavLink to={`/organizer/${event?.Organizer?.slug ?? ""}`}>
                    <p className="text-[15px] tracking-wide mt-1 font-medium">
                      {event?.Organizer?.name ?? "Not added yet!"}
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
            <RegisterBtn />
            <Capacity />
            <Countdown />
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
