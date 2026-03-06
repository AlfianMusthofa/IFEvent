import { useEffect, useState } from "react";
import Navbar from "../../../components/Admin/Navbar";
import { CircleUser } from "lucide-react";
import { API_URL } from "../../../service/api";
import { formatEventDate } from "../../../utils/date";
import AvatarDefault from "../../../assets/icons/userAvatar.png";

interface Pops {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  image: string;
}

const Users = () => {
  const [users, setUsers] = useState<Pops[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (pageNumber = 1, searchValue = search) => {
    const params = new URLSearchParams({
      limit: "10",
      page: String(pageNumber),
    });

    if (searchValue) {
      params.append("search", searchValue);
    }

    const res = await fetch(`${API_URL}/users?${params.toString()}`);
    const data = await res.json();
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

  return (
    <>
      <Navbar path="Users management" />
      <div className="my-3 flex items-center justify-between gap-3">
        <div className="bg-white p-4 flex-1 rounded-[5px] shadow-sm flex justify-between">
          <div>
            <p className="text-[13px] tracking-wide">Total users</p>
            <h1 className="mt-1 text-[23px]">{users.length}</h1>
          </div>
          <CircleUser />
        </div>
        <div className="bg-white p-4 flex-1 rounded-[5px] shadow-sm flex justify-between">
          <div>
            <p className="text-[13px] tracking-wide">New users</p>
            <h1 className="mt-1 text-[23px]">10</h1>
          </div>
          <CircleUser />
        </div>
        <div className="bg-white p-4 flex-1 rounded-[5px] shadow-sm flex justify-between">
          <div>
            <p className="text-[13px] tracking-wide">Active users</p>
            <h1 className="mt-1 text-[23px]">10</h1>
          </div>
          <CircleUser />
        </div>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="text-[14px] px-4 py-[7px] rounded-[5px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-green-400 px-5 py-2 rounded-[5px] cursor-pointer">
          <p className="text-[12px] text-white">Add User +</p>
        </button>
      </div>
      <div>
        <div className="overflow-x-auto rounded-[5px] border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Username</th>
                <th className="px-6 py-4 text-left font-medium">Email</th>
                <th className="px-6 py-4 text-left font-medium">Date Joined</th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-900 flex items-center gap-2">
                    <img
                      src={user.image ? user.image : AvatarDefault}
                      className="w-[30px] h-[30px] object-cover  rounded-full"
                    />
                    {user.name}
                  </td>

                  <td className="px-6 py-3 text-gray-600">{user.email}</td>

                  <td className="px-6 py-3 text-gray-600">
                    {formatEventDate(user.createdAt)}
                  </td>

                  <td className="px-6 py-3 text-right">
                    <button className="ml-2 rounded-lg px-3 py-1 text-sm text-red-600 hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="text-[14px]">
          <div className="flex items-center gap-2 mt-2 justify-start">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-sm">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
