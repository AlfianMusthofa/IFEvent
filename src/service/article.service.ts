const ApiUrl = import.meta.env.VITE_API_URL;

export interface GetArticleServiceProps {
  page?: number;
  limit?: number;
}

export const getArticleService = async ({
  page = 1,
  limit = 6,
}: GetArticleServiceProps) => {
  const res = await fetch(`${ApiUrl}/articles?page=${page}&limit=${limit}`);

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
};
