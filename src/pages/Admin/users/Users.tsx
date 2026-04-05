import { useEffect, useState } from "react";
import { CalendarCheck, Search, Users2 } from "lucide-react";
import { API_URL } from "../../../service/api";
import { formatEventDate2 } from "../../../utils/date";
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
  const [totalUsers, setTotalUsers] = useState(null);

  const fetchUsers = async (pageNumber = 1, searchValue = search) => {
    const params = new URLSearchParams({
      limit: "6",
      page: String(pageNumber),
    });

    if (searchValue) {
      params.append("search", searchValue);
    }

    const res = await fetch(`${API_URL}/users?${params.toString()}`);
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

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const formatNumber = (num: any) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 border-b">
        <h1 className="text-[20px] font-medium">Users Management</h1>
        <button className="bg-gradient-to-r from-[#EC5B13] to-[#CF4D58] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm">
          <p className="text-[12px] text-white">Add New User +</p>
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2 flex gap-2">
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <Users2 width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Users</p>
            </div>
            <h1 className="font-semibold">{totalUsers}</h1>
          </div>
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <CalendarCheck width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Events</p>
            </div>
            <h1 className="font-semibold">10</h1>
          </div>
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <CalendarCheck width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Events</p>
            </div>
            <h1 className="font-semibold">10</h1>
          </div>
        </div>
        <div className=" py-[12px] px-[12px] mb-2 rounded-[8px] bg-white border">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-3"></div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="bg-[#f1f5f9] py-[5px] px-[10px] rounded-l-[5px] shadow-sm">
                  <Search width={15} />
                </div>
                <input
                  type="text"
                  placeholder="Search user..."
                  className="text-[14px] py-[6.5px] w-[200px] bg-[#f1f5f9] outline-none rounded-r-[5px]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto rounded-[5px] border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    USERNAME
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    EMAIL
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    DATE JOINED
                  </th>
                  <th className="pl-11 py-4 text-left font-medium text-[11px] tracking-wider  ">
                    ACTION
                  </th>
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

                    <td className="px-6 py-3 text-gray-600 text-[13px]">
                      {formatEventDate2(user.createdAt)}
                    </td>

                    <td className="px-6 py-3 text-left">
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
          <div className="flex justify-center pt-2 text-[14px]">
            <div className="flex bg-white items-center rounded-[5px] w-fit overflow-hidden border">
              {/* Prev */}
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="px-4 py-2 border-r hover:bg-gray-100 disabled:opacity-40"
              >
                Prev
              </button>

              {/* Page Info */}
              <div className="px-6 py-2 text-[14px]">
                {formatNumber(page)} - {formatNumber(totalPages)}
              </div>

              {/* Next */}
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="px-4 py-2 border-l hover:bg-gray-100 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
