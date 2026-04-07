import { useEffect, useState } from "react";
import { getArticleService } from "../../../service/article.service";

export const useArticle = (limit: number) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getArticles = async (pageParam = page) => {
    try {
      const data = await getArticleService({
        page: pageParam,
        limit,
      });

      setArticles(data.data);
      setPage(data.meta.page);
      setTotalPages(data.meta.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles(1);
  }, []);

  return {
    articles,
    page,
    totalPages,
    getArticles,
  };
};
