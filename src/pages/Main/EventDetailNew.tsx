import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";
import { Bounce, toast } from "react-toastify";
import { CalendarClock, MapPin } from "lucide-react";
import { formatEventDate } from "../../utils/date";
import Footer from "../../components/Footer";
import EventLocationModal from "../../components/EventDetail/EventLocationModal";
import Instagram from "../../assets/icons/instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import Link from "../../assets/icons/link.png";

interface EventProps {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  bio: string;
  position: string;
  mentor: string;
  mentorImage: string;
  startAt: string;
  locationType: string;
  priceType: string;
  price: number;
  Mentor: { name: string; image: string; position: string; bio: string };
}

const EventDetailNew = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState<EventProps>();
  const [joined, setJoined] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const fetchEvent = async () => {
      const res = await fetch(`${API_URL}/events/slug/${slug}`);
      const data = await res.json();
      console.log(data);
      setEvent(data);

      if (accessToken) {
        const historyRes = await fetch(`${API_URL}/users/me/history`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (historyRes.ok) {
          const history = await historyRes.json();
          const alreadyJoined = history.data?.some(
            (e: any) => e.id === data.id,
          );

          setJoined(alreadyJoined);
        }
      }
    };

    fetchEvent();
  }, [slug]);

  const handleJoin = async () => {
    try {
      const res = await fetch(`${API_URL}/events/${event?.id}/join`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) {
        navigate("/login");
        return;
      }

      setJoined(true);

      toast.success("Registered Success", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });
    } catch (err) {
      toast.warning("Registered Failed", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });
      console.error(err);
    }
  };

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat("id-ID").format(number);
  };

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
                  <li>{event?.title}</li>
                </li>
              </ul>
            </div>
            <h1 className="text-[25px] font-medium tracking-wide line-clamp-2 border p-3 rounded-[10px]">
              {event?.title}
            </h1>
            <div className="my-3 border p-3 rounded-[10px]">
              <div className="flex gap-3">
                <MapPin width={17} />
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
                  <div className="tracking-wide">{event?.locationType}</div>
                )}
              </div>
              <div className="flex items-center gap-3 mt-2">
                <CalendarClock width={15} />
                <div className="text-[14px]">
                  {formatEventDate(event?.startAt)} WIB
                </div>
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
                  className="w-[130px] h-[130px] rounded-[13px]"
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
            <div className="shadow-md mt-5 px-4 py-3 flex items-center justify-between border rounded-[10px]">
              {event?.priceType == "free" ? (
                <h2 className="text-[15px] font-medium">Free</h2>
              ) : (
                <h2 className="text-[15px] font-medium">
                  IDR {formatRupiah(event?.price)}
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
                <h2 className="text-[15px] tracking-wide font-medium">
                  {joined ? "Registered" : "Register"}
                </h2>
              </button>
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
