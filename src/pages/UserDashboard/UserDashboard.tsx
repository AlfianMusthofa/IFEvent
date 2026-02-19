import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../service/api";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }

    const getHistory = async () => {
      const res = await fetch(`${API_URL}/users/me/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      setHistory(data);
    };

    getHistory();
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
      <div className="flex flex-col gap-5 justify-center items-center">
        <button
          className="bg-yellow-primer font-medium text-black px-6 py-2 rounded-md mt-3"
          onClick={logout}
        >
          Logout
        </button>
        <div>
          {history?.Events?.map((event: any, index: number) => (
            <div key={index}>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
