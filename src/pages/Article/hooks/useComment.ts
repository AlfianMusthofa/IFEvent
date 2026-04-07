import { useEffect, useState } from "react";
import { getCommentService } from "../../../service/comment.service";

interface Comment {
  id: number;
  content: string;
  createdAt: string;
}

export const useComment = (articleId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);

  const getComments = async (pageParam = page, limitParam = limit) => {
    try {
      setLoading(true);

      const data = await getCommentService({
        articleId,
        page: pageParam,
        limit: limitParam,
      });

      setComments(data.data);
      setPage(data.meta.page);
      setTotalPages(data.meta.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (articleId) {
      getComments(1, limit);
    }
  }, [articleId, limit]);

  return {
    comments,
    page,
    limit,
    totalPages,
    loading,
    setLimit,
    getComments,
  };
};
