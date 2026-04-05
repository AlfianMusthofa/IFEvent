import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { formatEventDate2 } from "../../utils/date";
import { Link } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

interface Props {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string;
  createdAt: string;
}

interface Category {
  id: number;
  name: string;
}

const Article = () => {
  const [articles, setArticles] = useState<Props[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const getArticles = async () => {
    const res = await fetch(`${ApiUrl}/articles`);
    const data = await res.json();
    setArticles(data.data);
  };

  const getCategories = async () => {
    const res = await fetch(`${ApiUrl}/category`);
    const data = await res.json();
    setCategories(data.data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Navbar />
      {/* hero */}
      <div className="max-w-[1029px] mx-auto">
        <div className="mt-5">
          <div>
            <h1 className="text-[25px] font-medium tracking-wide">
              Our Recent Articles
            </h1>
            <p className="text-[13px] tracking-wide font-light">
              Stay Informed with Our Latest Insight
            </p>
          </div>
          <div className="flex gap-2 items-center text-[13px] mt-5 border rounded-md px-[20px] py-[15px]">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-[18px] py-[6px] rounded-full transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-yellow-200"
                    : "hover:bg-yellow-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {articles.map((article) => (
              <Link to={`/article/${article.slug}`} key={article.id}>
                <div>
                  <img
                    src={article.image}
                    className="object-cover rounded-md h-[200px] w-full"
                  />
                  <div className="mt-4">
                    <div className="text-[11px] flex items-center justify-between">
                      <p>By Elevate Team</p>
                      <p>{formatEventDate2(article.createdAt)}</p>
                    </div>
                    <h2 className="line-clamp-2 font-medium tracking-wide text-[17px]">
                      {article.title}
                    </h2>
                    <p
                      className="line-clamp-3 text-[12px] mt-1"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
