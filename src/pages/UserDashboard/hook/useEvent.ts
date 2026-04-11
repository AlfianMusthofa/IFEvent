import { useEffect, useState } from "react";

const ApiUrl = import.meta.env.VITE_API_URL;

export const useEventById = (eventId: number) => {
  const [event, setEvent] = useState(null);

  const getEventById = async () => {
    const res = await fetch(`${ApiUrl}/events/${eventId}`);
    const data = await res.json();
    setEvent(data);
  };

  useEffect(() => {
    getEventById();
  }, []);

  return { event };
};
