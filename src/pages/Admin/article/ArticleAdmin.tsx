import { CalendarCheck, Newspaper, Search } from "lucide-react";
import { useState } from "react";
import CreateArticle from "./CreateArticle";

const ArticleAdmin = () => {
  const [modal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 border-b">
        <h1 className="text-[20px] font-medium">Articles Management</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#ec5b13] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm"
        >
          <p className="text-[12px] text-white">Create New Article +</p>
        </button>
      </div>
      <div className="p-5">
        <div className="mb-2 flex gap-2">
          <div className="flex justify-between items-center flex-1 bg-white px-[12px] py-[12px] gap-3 rounded-[5px] border">
            <div className="flex items-center gap-3">
              <div className="bg-[#fdeee7] px-[10px] py-[6px] rounded-[5px]">
                <Newspaper width={17} color="red" />
              </div>
              <p className="text-[12px]">Total Articles</p>
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
                  placeholder="Search article..."
                  className="text-[14px] py-[6.5px] w-[200px] bg-[#f1f5f9] outline-none rounded-r-[5px]"
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
      </div>
      {modal && <CreateArticle onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default ArticleAdmin;
