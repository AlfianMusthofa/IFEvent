import { CalendarCheck, Newspaper, Search } from "lucide-react";
import { useEffect, useState } from "react";
import CreateArticle from "./CreateArticle";
import { formatEventDate2 } from "../../../utils/date";
import UpdateArticle from "./UpdateArticle";

const ApiUrl = import.meta.env.VITE_API_URL;

interface Props {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  createdAt: string;
}

const ArticleAdmin = () => {
  const [modal, setOpenModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const [category, setCategory] = useState<Props[]>([]);
  const [articles, setArticles] = useState<Props[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const fetchCategory = async () => {
    const res = await fetch(`${ApiUrl}/category`);
    const data = await res.json();
    setCategory(data.data);
  };

  const fetchArticle = async () => {
    const res = await fetch(`${ApiUrl}/articles`);
    const data = await res.json();
    console.log("Article,", data.data);
    setArticles(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 border-b">
        <h1 className="text-[20px] font-medium">Articles Management</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-gradient-to-r from-[#EC5B13] to-[#CF4D58] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm"
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
            <div className="flex items-center gap-3">
              <select className="w-[180px] bg-[#f1f5f9] outline-none px-3 py-[7px] text-[13px] rounded-[5px] appearance-none cursor-pointer">
                <option value="">All Category</option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
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
        <div className="grid grid-cols-4 gap-2">
          {articles.map((article) => (
            <div className="bg-white p-3 rounded-[5px] border" key={article.id}>
              <div className="relative">
                <img
                  src={article.image}
                  className="object-cover rounded-md h-[140px] w-full"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-gradient-to-r from-[#EC5B13] to-[#CF4D58] px-[13px] py-[4px] rounded-full">
                  <p className="text-[12px] tracking-wide text-white">
                    {article.category.name}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-[5px]">
                  <p className="text-[11px] tracking-wide">
                    {formatEventDate2(article.createdAt)}
                  </p>
                </div>
                <h2 className="line-clamp-2 font-medium tracking-wide text-[14px]">
                  {article.title}
                </h2>
                <p
                  className="line-clamp-2 text-[12px] mt-1"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></p>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setModalUpdate(true);
                      setSelectedSlug(article.slug);
                    }}
                    className="text-[13px] tracking-wide underline text-blue"
                  >
                    Update
                  </button>
                  <button className="text-[13px] tracking-wide underline text-red-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && <CreateArticle onClose={() => setOpenModal(false)} />}
      {modalUpdate && (
        <UpdateArticle
          onClose={() => {
            setModalUpdate(false);
            setSelectedSlug(null);
          }}
          slug={selectedSlug}
        />
      )}
    </>
  );
};

export default ArticleAdmin;
