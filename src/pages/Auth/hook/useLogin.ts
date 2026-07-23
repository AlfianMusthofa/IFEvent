import { API_URL } from "../../../service/api";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

export const useLogin = (form: LoginForm) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("email", form.email);
    formData.append("password", form.password);

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login Failed");
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          image: data.user.image,
        }),
      );

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      toast.success("Login success", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });

      navigate("/");
    } catch (error) {
      console.error("Network failed:", error);
      toast.warning("Invalid email or password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
  };
};
