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
      <div className="mx-auto max-w-[1029px] px-4 sm:px-6 lg:px-0">
        <div className="mt-5">
          <div>
            <h1 className="text-[22px] font-medium tracking-wide sm:text-[25px]">
              Our Recent Articles
            </h1>
            <p className="text-[13px] font-light tracking-wide">
              Stay Informed with Our Latest Insight
            </p>
          </div>

          <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                to={`/article/${article.slug}`}
                key={article.id}
                className="min-w-0"
              >
                <div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[200px] w-full rounded-md object-cover sm:h-[220px]"
                  />
                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-2 text-[11px]">
                      <p>By Elevate Team</p>
                      <p className="shrink-0">
                        {formatEventDate2(article.createdAt)}
                      </p>
                    </div>
                    <h2 className="mt-1 line-clamp-2 text-[16px] font-medium tracking-wide sm:text-[17px]">
                      {article.title}
                    </h2>
                    <p
                      className="mt-1 line-clamp-3 text-[12px]"
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
