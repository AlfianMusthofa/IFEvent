import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ApiUrl = import.meta.env.VITE_API_URL;

export const usePostFunction = (
  token: any,
  articleId: number,
  onSuccess?: () => void,
) => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [replyTo, setReplyTo] = useState<{ id: number; name: string } | null>(
    null,
  );

  const handlePostComment = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    if (!content.trim()) return;

    try {
      const res = await fetch(`${ApiUrl}/comments/${articleId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          content,
          parentId: replyTo ? replyTo.id : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      setContent("");
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return { handlePostComment, setReplyTo, replyTo, content, setContent };
};
