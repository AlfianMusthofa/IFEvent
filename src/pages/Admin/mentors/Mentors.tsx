import { CalendarCheck, Search, User2 } from "lucide-react";
import { API_URL } from "../../../service/api";
import { useEffect, useState } from "react";
import { formatEventDate2 } from "../../../utils/date";
import AvatarDefault from "../../../assets/icons/userAvatar.png";
import AddMentor from "./AddMentor";
import UpdateMentor from "./UpdateMentor";

interface MentorSProps {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  total: number;
}

const Mentors = () => {
  const [mentors, setMentors] = useState<MentorSProps[]>([]);
  const [total, setTotal] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalUpdate, setUpdateModal] = useState(false);

  const fetchMentors = async (pageNumber = 1) => {
    const params = new URLSearchParams({
      limit: "5",
      page: String(pageNumber),
    });

    const res = await fetch(`${API_URL}/mentors?${params.toString()}`);
    const data = await res.json();

    setMentors(data.data);
    setTotal(data.meta);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
  };

  useEffect(() => {
    fetchMentors(page);
  }, [page]);

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
        <h1 className="text-[20px] font-medium">Mentors Management</h1>
        <button
          onClick={() => setModal(true)}
          className="bg-[#ec5b13] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm"
        >
          <p className="text-[12px] text-white">Add New Mentor +</p>
        </button>
      </div>
      <div className="p-5">
        <div className="mb-2 flex gap-2">
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <User2 width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Mentors</p>
            </div>
            <h1 className="font-semibold">{total?.total}</h1>
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
                  placeholder="Search mentor..."
                  className="text-[14px] py-[6.5px] w-[200px] bg-[#f1f5f9] outline-none rounded-r-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto rounded-[5px] border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 border-b">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    NO
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    USERNAME
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
                {mentors.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-900 flex items-center gap-2">
                      <img
                        src={user.image ? user.image : AvatarDefault}
                        className="w-[30px] h-[30px] object-cover  rounded-full"
                      />
                      {user.name}
                    </td>

                    <td className="px-6 py-3 text-gray-600 text-[13px]">
                      {formatEventDate2(user.createdAt)}
                    </td>

                    <td className="px-6 py-3 text-left flex items-center">
                      <button className="ml-2 rounded-lg pl-3 py-1 text-sm text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                      <button className=" rounded-lg pl-3 py-1 text-sm text-green-500 hover:bg-red-50">
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center pt-2 text-[14px]">
          <div className="flex bg-white items-center rounded-[5px] w-fit overflow-hidden border">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 border-r hover:bg-gray-100 disabled:opacity-40"
            >
              Prev
            </button>

            <div className="px-6 py-2 text-[14px]">
              {formatNumber(page)} - {formatNumber(totalPages)}
            </div>

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
      {modal && <AddMentor onClose={() => setModal(false)} />}
      {modalUpdate && <UpdateMentor onClose={() => setUpdateModal(false)} />}
    </>
  );
};

export default Mentors;
