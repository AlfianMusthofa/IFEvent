import { useEffect, useState } from "react";

interface Pops {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  image: string;
}

const ApiUrl = import.meta.env.VITE_API_URL;

export const useUser = () => {
  const [users, setUsers] = useState<Pops[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(null);

  const fetchUsers = async (pageNumber = 1, searchValue = search) => {
    const params = new URLSearchParams({
      limit: "6",
      page: String(pageNumber),
    });

    if (searchValue) {
      params.append("search", searchValue);
    }

    const res = await fetch(`${ApiUrl}/users?${params.toString()}`);
    const data = await res.json();
    setTotalUsers(data.meta.total);
    setUsers(data.data);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      (fetchUsers(1), setPage(1));
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  return {
    users,
    setSearch,
    search,
    totalPages,
    totalUsers,
    page,
    setPage,
  };
};
