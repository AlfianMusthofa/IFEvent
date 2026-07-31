import { useEffect, useState } from "react";
import { API_URL } from "../../../service/api";

interface EventsProps {
  id: number;
  title: string;
  image: string;
  description: string;
  startAt: string;
  slug: string;
}

export const useEvents = (slug: string) => {
  const [upcomingEvents, setUpcomingEvents] = useState<EventsProps[]>([]);

  useEffect(() => {
    const fetchEvents2 = async () => {
      const result = await fetch(
        `${API_URL}/organizer/${slug}/events/upcoming`,
      );
      const data = await result.json();
      setUpcomingEvents(data.data);
    };

    fetchEvents2();
  }, [slug]);

  return { upcomingEvents };
};
