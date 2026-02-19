import { useEffect } from "react";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../service/api";

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const logout = async (e) => {
    e.preventDefault();

    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refreshToken }),
      });
    } catch (error) {
      console.error("Logout error:", error);
    }

    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

    window.location.href = "/";
  };

  return (
    <>
      <Navbar />
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default UserDashboard;
