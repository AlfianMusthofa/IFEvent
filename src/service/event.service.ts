const ApiUrl = import.meta.env.VITE_API_URL;

// COUNT EVENT STATUS SERVICE
export const getEventStatusService = async (status: string) => {
  const res = await fetch(`${ApiUrl}/status/count/${status}`);
  if (!res.ok) {
    throw new Error("Failed to fetch status events");
  }
  return res.json();
};

// EVENTS SERVICE
export const getEventService = async (
  status?: string,
  category?: string,
  search?: string,
  limit: number = 4,
  page: number = 1,
) => {
  const params = new URLSearchParams();

  if (status) params.append("status", status);
  if (category) params.append("category", category);
  if (search) params.append("search", search);
  params.append("limit", String(limit));
  params.append("page", String(page));

  const res = await fetch(`${ApiUrl}/events?${params.toString()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }
  return res.json();
};
