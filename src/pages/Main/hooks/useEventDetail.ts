import { useEffect, useState } from "react";
import { API_URL } from "../../../service/api";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  Organizer: {
    slug: string;
    name: string;
    image: string;
  };
  registered_count: number;
  capacity: number;
  Mentor: { name: string; image: string; position: string; bio: string };
}

export const useEventDetail = (slug: string) => {
  const [event, setEvent] = useState<EventProps>();
  const [joined, setJoined] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;
    const fetchEvent = async () => {
      const res = await fetch(`${API_URL}/events/slug/${slug}`);
      const data = await res.json();
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

  return {
    handleJoin,
    joined,
    event,
  };
};
