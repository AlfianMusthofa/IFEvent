import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export const useGetMe = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();

  const getMe = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }

    const res = await fetch(`${ApiUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getMe();
  }, []);

  return { user };
};
