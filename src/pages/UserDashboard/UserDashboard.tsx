import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../service/api";
import Avatar from "../../assets/icons/userAvatar.png";
import Footer from "../../components/Footer";
import { formatEventDate } from "../../utils/date";

interface EventsProps {
  id: number;
  title: string;
  startAt: string;
  status: { name: string };
  locationType: string;
  meetingLink: string;
  location: string;
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventsProps[]>([]);
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
      console.log(data.data);
      setEvents(data.data);
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
        <div>
          <div className="bg-white">
            <h2 className="text-xl font-semibold mb-5">Event History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Event
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Date
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Status
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Location
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Certificate
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-3 text-sm  w-[290px]">
                        <p className="line-clamp-2">{event.title}</p>
                      </td>
                      <td className="px-6 py-3 text-sm w-[220px]">
                        <p>{formatEventDate(event.startAt)} WIB</p>
                      </td>
                      <td className="px-6 py-3 text-sm">
                        <p>{event.status.name}</p>
                      </td>
                      <td className="px-6 py-3 text-sm  w-[100px]">
                        <a
                          className="line-clamp-1"
                          href={
                            event.locationType === "online"
                              ? event.meetingLink
                              : "null"
                          }
                        >
                          {event.locationType === "online"
                            ? event.meetingLink
                            : event.location}
                        </a>
                      </td>
                      <td className="px-6 text-sm">
                        <button>Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default UserDashboard;
