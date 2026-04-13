import { useEffect, useState } from "react";

const ApiUrl = import.meta.env.VITE_API_URL;

export const usePostReview = (eventId: number) => {
  const postReview = async (form: {
    image: File | null;
    rating: number;
    content: string;
  }) => {
    const formData = new FormData();

    formData.append("rating", String(form.rating));
    formData.append("content", form.content);

    if (form.image) {
      formData.append("image", form.image);
    }

    const res = await fetch(`${ApiUrl}/reviews/${eventId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to post review");
    }

    return res.json();
  };

  return { postReview };
};

export const useCheckMyReview = (events: any) => {
  const [reviews, setReviews] = useState<Record<number, any>>({});
  const [totalReviews, setTotalReviews] = useState(null);

  const checkMyReview = async (eventId: number) => {
    const res = await fetch(`${ApiUrl}/events/${eventId}/my-review`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();

    setReviews((prev) => ({
      ...prev,
      [eventId]: data.myReview,
    }));
  };

  useEffect(() => {
    const fetchAllReviews = async () => {
      await Promise.all(events.map((event: any) => checkMyReview(event.id)));
    };

    if (events.length > 0) {
      fetchAllReviews();
    }
  }, [events]);

  useEffect(() => {
    const getTotalReview = async () => {
      const res = await fetch(`${ApiUrl}/reviews/total`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      setTotalReviews(data);
    };

    getTotalReview();
  }, []);

  return { reviews, totalReviews };
};
