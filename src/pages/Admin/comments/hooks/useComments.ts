import { useEffect, useState } from "react";

interface CommentsProps {
  id: number;
  content: string;
  createdAt: string;
}

export const useComments = (limit: number) => {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ApiUrl = import.meta.env.VITE_API_URL;

  const getComments = async (pageParam = page) => {
    try {
      const res = await fetch(
        `${ApiUrl}/comments?page=${pageParam}&limit=${limit}`,
      );
      const data = await res.json();
      setComments(data.data);
      setPage(data.meta.page);
      setTotalPages(data.meta.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getComments(1);
  }, [limit]);

  return {
    comments,
    page,
    totalPages,
    getComments,
  };
};
