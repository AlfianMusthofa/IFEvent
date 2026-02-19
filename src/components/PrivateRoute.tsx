import { useEffect, useState } from "react";
import { API_URL } from "../service/api";
import { Navigate, Outlet } from "react-router-dom";
import { refreshToken } from "../service/auth";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        // 1️⃣ coba /me pakai access token
        let response = await fetch(`${API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // 2️⃣ kalau access token expired → refresh
        if (response.status === 401) {
          const newAccessToken = await refreshToken();

          if (!newAccessToken) {
            throw new Error("Refresh token invalid");
          }

          // 3️⃣ retry /me dengan token baru
          response = await fetch(`${API_URL}/auth/me`, {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          });
        }

        if (response.ok) {
          setAuthorized(true);
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        console.log("Auth failed:", error);

        // ❌ logout hanya di SINI
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
