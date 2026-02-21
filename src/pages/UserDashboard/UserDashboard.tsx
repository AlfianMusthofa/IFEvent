import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../service/api";
import Avatar from "../../assets/icons/userAvatar.png";
import Footer from "../../components/Footer";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<any>(null);
  const [user, setUser] = useState<any>();

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

    const getMe = async () => {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUser(data);
    };

    getHistory();
    getMe();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-[1029px] mx-auto">
        <div className="breadcrumbs text-sm my-2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <p>{user?.name}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-6">
            {user?.image ? (
              <img
                src={user.image}
                className="w-[100px] rounded-xl object-cover"
              />
            ) : (
              <img src={Avatar} className="w-[100px] rounded-xl object-cover" />
            )}
            <h2>{user?.name}</h2>
          </div>
          <div className="mt-4 flex gap-3">
            <Link
              to="#"
              className="bg-yellow-primer text-[14px] px-5 py-2 rounded-[5px] font-medium tracking-wide"
            >
              <p>Change Profile</p>
            </Link>
            <Link
              to="#"
              className="bg-yellow-light text-[14px] px-5 py-2 rounded-[5px] font-medium tracking-wide"
            >
              <p>Share Profile</p>
            </Link>
          </div>
        </div>
        <div className="bg-gray-300 h-[1px] my-5"></div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Location</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history?.Events?.map((event: any, index: any) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{event.title}</td>
                  <td>{event.location}</td>
                  <td>On going</td>
                  <td>On going</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default UserDashboard;
