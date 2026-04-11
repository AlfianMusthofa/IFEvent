import { useEffect, useState } from "react";
import {
  getEventService,
  getEventStatusService,
} from "../../../../service/event.service";

export const useStatusCount = (status: string) => {
  const [total, setTotal] = useState(null);

  const fetchCount = async () => {
    try {
      const data = await getEventStatusService(status);
      setTotal(data.total);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return {
    total,
  };
};

type UseEventsParams = {
  status?: string;
  category?: string;
  search?: string;
  limit?: number;
  page?: number;
};

export const useEvents = ({
  status = "",
  category = "",
  search = "",
  limit = 4,
  page = 1,
}: UseEventsParams) => {
  const [events, setEvents] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);
  const [totalEvents, setTotalEvents] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (pageNumber: number) => {
    try {
      setLoading(true);

      const res = await getEventService(
        status,
        category,
        search,
        limit,
        pageNumber,
      );

      setEvents(res.data);
      setTotalPages(res.meta.totalPages);
      setTotalEvents(res.meta.total);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchEvents(1);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, category, status]);

  return {
    events,
    currentPage,
    totalPages,
    totalEvents,
    loading,
    setCurrentPage,
  };
};
