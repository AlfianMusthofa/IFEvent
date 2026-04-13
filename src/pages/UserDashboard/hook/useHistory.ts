import { useEffect, useState } from "react";

interface EventsProps {
  id: number;
  title: string;
  startAt: string;
  status: { name: string };
  locationType: string;
  meetingLink: string;
  location: string;
  Certificates: {};
}

const ApiUrl = import.meta.env.VITE_API_URL;

export const useHistory = () => {
  const [events, setEvents] = useState<EventsProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(null);

  const getMyHistory = async (pageNumber = 1, searchValue = search) => {
    const param = new URLSearchParams({
      limit: "5",
      page: String(pageNumber),
    });

    if (searchValue) {
      param.append("search", searchValue);
    }

    const res = await fetch(`${ApiUrl}/users/me/history?${param.toString()}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();

    setEvents(data.data);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPage);
    setCount(data.meta.total);
    console.log(data.data);
  };

  useEffect(() => {
    getMyHistory(page);
  }, [search, page]);

  return {
    events,
    page,
    setPage,
    totalPages,
    search,
    count,
    setSearch,
  };
};
