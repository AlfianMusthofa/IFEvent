import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { formatEventDate, formatEventDate2 } from "../../utils/date";
import Footer from "../../components/Footer";
import logo from "../../assets/icons/logo.png";
import avatar from "../../assets/icons/userAvatar.png";
import { Heart } from "lucide-react";
import { useComment } from "./hooks/useComment";
import Pagination from "../../components/Pagination";
import { useLikeFunction } from "./hooks/useLikeFunction";
import { usePostFunction } from "./hooks/usePostFunction";

interface Props {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const [items, setItems] = useState<Props | null>(null);
  const [totalLikes, setTotalLikes] = useState(0);

  const ApiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("accessToken");

  const { comments, page, totalPages, getComments } = useComment(items?.id!);
  const { handleLike, liked, setLiked } = useLikeFunction();
  const { content, handlePostComment, replyTo, setContent, setReplyTo } =
    usePostFunction(token, items?.id!);

  const getData = async () => {
    const res = await fetch(`${ApiUrl}/articles/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    setItems(data.article);
    setLiked(data.liked);
    setTotalLikes(data.totalLikes);
  };

  useEffect(() => {
    getData();
  }, [slug]);

  const handlePrev = () => {
    if (page > 1) getComments(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) getComments(page + 1);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[1029px] mx-auto">
        <div className="mt-8">
          {/* <p className="text-center">#{items.category.name}</p> */}
        </div>
        <div>
          <h1 className="text-center w-[610px] mx-auto text-[35px] leading-10 font-bold tracking-wide">
            {items?.title}
          </h1>
        </div>
        <div className="text-center my-4 text-[13px] tracking-wide">
          <p className="font-light">
            By Elevate Team | {formatEventDate2(items?.createdAt)}
          </p>
        </div>
        <img
          src={items?.image}
          alt={slug}
          className="h-[550px] w-full object-cover"
        />
        <div className="mt-8 w-[750px] mx-auto">
          <p
            dangerouslySetInnerHTML={{ __html: items?.content || "" }}
            className={`
                              text-[17px]  tracking-wide font-light leading-7
                              [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1
                           `}
          ></p>
        </div>
        <div className="w-[750px] mx-auto flex items-center gap-2 mt-4 ">
          <button
            onClick={() => handleLike(token, items?.id!)}
            className="flex items-center "
          >
            <Heart
              width={19}
              fill={liked ? "red" : "none"}
              stroke={liked ? "red" : "black"}
            />
          </button>
          <span className="text-[14px]">{totalLikes}</span>
        </div>
        <div className="flex items-center gap-3 my-5 w-[750px] mx-auto">
          <div className="flex-1 h-px bg-gray-200" />
          <div className=" px-4 py-1.5 ">
            <img
              src={logo}
              className="w-[80px] h-[80px] rounded-full object-cover"
            />
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="flex items-center gap-3 my-5 w-[750px] mx-auto">
          <div className="flex-1 h-px bg-gray-200" />
          <div className=" px-4 py-1.5 ">
            <h1 className="font-medium tracking-wide">Comments</h1>
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        {/* Content */}

        <div className="w-[750px] mx-auto flex flex-col gap-3">
          {comments.map((item) => (
            <div
              className="flex gap-5 border p-3 rounded-[5px] bg-white"
              key={item.id}
            >
              <img src={avatar} className="w-[50px] h-[50px] rounded-full" />
              <div>
                <h1>{item.User.name}</h1>
                <p className="text-[12px] font-light">
                  {formatEventDate(item.createdAt)}
                </p>
                <p className="text-[15px] mt-3">{item.content}</p>
                <div className="mt-2">
                  <button
                    onClick={() =>
                      setReplyTo({ id: item.id, name: item.User.name })
                    }
                    className="text-[12px] font-medium"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 my-3 w-[750px] mx-auto">
          <div className="flex-1 h-px bg-gray-200" />
          <div className=" px-4 py-1.5 ">
            <h1 className="font-medium tracking-wide">Write A Comment</h1>
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="w-[750px] mx-auto flex items-center  mb-5 gap-2">
          <Pagination
            page={page}
            totalPages={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
        <div className="w-[750px] mx-auto mb-5">
          {replyTo && (
            <div className="flex items-center gap-2 mb-2 text-[12px] text-gray-500 bg-gray-100 px-3 py-2 rounded-[5px]">
              <span>
                Membalas komentar <strong>{replyTo.name}</strong>
              </span>
              <button
                onClick={() => setReplyTo(null)}
                className="ml-auto text-red-400 font-medium"
              >
                ✕ Cancell
              </button>
            </div>
          )}
          <textarea
            className="bg-white w-full border resize-none p-3 rounded-[5px] outline-none h-[160px]"
            placeholder="Enter your comment here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            onClick={handlePostComment}
            className="rounded-[5px] my-3 text-[14px] bg-black text-white px-[15px] py-[8px]"
          >
            POST COMMENT
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetail;
