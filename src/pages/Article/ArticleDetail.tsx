import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { formatEventDate, formatEventDate2 } from "../../utils/date";
import Footer from "../../components/Footer";
import logo from "../../assets/icons/logo.png";
import avatar from "../../assets/icons/userAvatar.png";
import { Heart } from "lucide-react";

interface Props {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

interface PropsComment {
  id: number;
  content: string;
  createdAt: string;
  User: {
    id: number;
    name: string;
  };
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const [items, setItems] = useState<Props | null>(null);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<PropsComment[]>([]);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const ApiUrl = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem("accessToken");

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
  };

  const id = items?.id;

  useEffect(() => {
    getData();
    console.log("id this article:", id);
  }, [slug]);

  useEffect(() => {
    const getAllComments = async () => {
      const res = await fetch(`http://127.0.0.1:3000/comments/${id}`);
      const data = await res.json();
      setComments(data);
    };
    getAllComments();
  }, [id]);

  const handlePostComment = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    if (!content.trim()) return;

    try {
      const res = await fetch(`${ApiUrl}/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      setContent("");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLikeButton = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(`${ApiUrl}/articles/${id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setLiked(data.liked);
      console.log("Like button clicked");
    } catch (error) {
      console.log(error);
    }
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
            dangerouslySetInnerHTML={{ __html: items?.content }}
            className={`
                              text-[17px]  tracking-wide font-light leading-7
                              [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1
                           `}
          ></p>
        </div>
        <div className="w-[750px] mx-auto flex items-center gap-5 mt-4">
          <button onClick={handleLikeButton} className="flex items-center">
            <Heart
              width={19}
              fill={liked ? "red" : "none"}
              stroke={liked ? "red" : "black"}
            />
          </button>
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
            <div className="flex gap-5 border p-3 rounded-[5px]" key={item.id}>
              <img src={avatar} className="w-[50px] h-[50px] rounded-full" />
              <div>
                <h1>{item.User.name}</h1>
                <p className="text-[12px] font-light">
                  {formatEventDate(item.createdAt)}
                </p>
                <p className="text-[15px] mt-3">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 my-5 w-[750px] mx-auto">
          <div className="flex-1 h-px bg-gray-200" />
          <div className=" px-4 py-1.5 ">
            <h1 className="font-medium tracking-wide">Write A Comment</h1>
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="w-[750px] mx-auto mb-5">
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
