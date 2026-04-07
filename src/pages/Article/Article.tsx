import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { formatEventDate2 } from "../../utils/date";
import { Link } from "react-router-dom";
import { useArticle } from "./hooks/useArticle";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

const ApiUrl = import.meta.env.VITE_API_URL;

interface Category {
  id: number;
  name: string;
}

const Article = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const { articles, page, totalPages, getArticles } = useArticle(6);

  const getCategories = async () => {
    const res = await fetch(`${ApiUrl}/category`);
    const data = await res.json();
    setCategories(data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handlePrev = () => {
    if (page > 1) getArticles(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) getArticles(page + 1);
  };

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
          <div className="my-5 grid grid-cols-3 gap-3">
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
          <div className="my-5 flex justify-center">
            <Pagination
              page={page}
              totalPages={totalPages}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Article;
