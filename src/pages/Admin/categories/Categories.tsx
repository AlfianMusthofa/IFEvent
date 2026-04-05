import { useEffect, useState } from "react";
import { API_URL } from "../../../service/api";
import AddCategory from "./AddCategory";
import { CalendarCheck, Folder, Search } from "lucide-react";
import { formatEventDate2 } from "../../../utils/date";

const Categories = () => {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const cat = async () => {
      const response = await fetch(`${API_URL}/category`);
      const data = await response.json();
      setItems(data.data);
    };
    cat();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 border-b">
        <h1 className="text-[20px] font-medium">Categories Management</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-gradient-to-r from-[#EC5B13] to-[#CF4D58] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm"
        >
          <p className="text-[12px] text-white">Create New Category +</p>
        </button>
      </div>
      <div className="p-5">
        <div className="mb-2 flex gap-2">
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <Folder width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Category</p>
            </div>
            <h1 className="font-semibold">{items.length}</h1>
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
                  placeholder="Search category..."
                  className="text-[14px] py-[6.5px] w-[200px] bg-[#f1f5f9] outline-none rounded-r-[5px]"
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
                    NAME
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    EVENTS
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-[11px] tracking-wider">
                    CREATED AT
                  </th>
                  <th className="pl-11 py-4 text-left font-medium text-[11px] tracking-wider  ">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900 flex items-center gap-2">
                      {item.name}
                    </td>

                    <td className="px-6 py-3 text-gray-600">
                      {item.Events.length}
                    </td>

                    <td className="px-6 py-3 text-gray-600 text-[13px]">
                      {formatEventDate2(item.createdAt)}
                    </td>

                    <td className="px-6 py-3 text-left flex">
                      <button className="ml-2 rounded-lg px-3 py-1 text-sm text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                      <button className=" rounded-lg px-1 py-1 text-sm text-green-400 hover:bg-red-50">
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {openModal && <AddCategory onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Categories;
