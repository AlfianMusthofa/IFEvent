import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ApiUrl = import.meta.env.VITE_API_URL;

export const useLikeFunction = () => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLike = async (token: any, articleId: number) => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(`${ApiUrl}/articles/${articleId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setLiked(data.liked);
    } catch (error) {
      console.log(error);
    }
  };

  return { setLiked, liked, handleLike };
};
