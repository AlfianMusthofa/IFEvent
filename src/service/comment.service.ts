const ApiUrl = import.meta.env.VITE_API_URL;

export interface GetCommentParams {
  articleId: number;
  page?: number;
  limit?: number;
}

export const getCommentService = async ({
  articleId,
  page = 1,
  limit = 5,
}: GetCommentParams) => {
  const res = await fetch(
    `${ApiUrl}/comments/${articleId}?limit=${limit}&page=${page}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  return res.json();
};
