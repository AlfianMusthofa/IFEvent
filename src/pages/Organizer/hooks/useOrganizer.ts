import { useEffect, useState } from "react";
import { API_URL } from "../../../service/api";

interface OrganizerProps {
  name: string;
  about: string;
  description: string;
  total_events: number;
  location: string;
  followers: number;
  email: string;
  phone: string;
  website: string;
  Events: [title: string, slug: string];
}

export const useOrganizer = (slug: string) => {
  const [data, setData] = useState<OrganizerProps>();
  useEffect(() => {
    if (!slug) return;
    const getOrg = async () => {
      const res = await fetch(`${API_URL}/organizer/slug/${slug}`);
      const data = await res.json();
      setData(data);
    };

    getOrg();
  }, [slug]);

  return { data };
};
