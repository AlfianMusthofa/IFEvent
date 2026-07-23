import { API_URL } from "../../../service/api";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export const useRegister = (form: RegisterForm) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/send-otp`, {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim OTP");
      }

      navigate("/verify-otp", {
        state: {
          name: form.name,
          email: form.email,
          password: form.password,
        },
      });
    } catch (error) {
      console.error(error);

      toast.warning("Register failed!", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegister,
    loading,
  };
};
