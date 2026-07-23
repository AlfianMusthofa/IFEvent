import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../service/api";
import { Bounce, toast } from "react-toastify";

interface VerificationProps {
  name: string;
  email: string;
  password: string;
}

export const useVerificationOtp = ({
  name,
  email,
  password,
}: VerificationProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleVerify = async (otp: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          otp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      navigate("/");
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error ? error.message : "Verifikasi OTP gagal.",
        {
          position: "top-right",
          autoClose: 2000,
          transition: Bounce,
        },
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    handleVerify,
    loading,
  };
};
