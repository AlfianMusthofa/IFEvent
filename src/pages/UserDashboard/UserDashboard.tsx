import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../service/api";
import Avatar from "../../assets/icons/userAvatar.png";
import Footer from "../../components/Footer";
import { formatEventDate } from "../../utils/date";
import { CalendarCheck, Download } from "lucide-react";
import UpdateUser from "./UpdateUser";
import QrModal from "./QrModal";

interface EventsProps {
  id: number;
  title: string;
  startAt: string;
  status: { name: string };
  locationType: string;
  meetingLink: string;
  location: string;
  Certificates: {};
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventsProps[]>([]);
  const [user, setUser] = useState<any>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(null);
  const [modal, setModal] = useState(false);
  const [qrModal, setQrModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const getHistory = async (pageNumber = 1, searchValue = search) => {
    const param = new URLSearchParams({
      limit: "5",
      page: String(pageNumber),
    });

    if (searchValue) {
      param.append("search", searchValue);
    }

    const res = await fetch(`${API_URL}/users/me/history?${param.toString()}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    console.log(data.data);

    data.data.forEach((event: any) => {
      console.log(event.EventParticipantModels?.[0]?.ticketCode);
    });

    setEvents(data.data);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPage);
    setCount(data.meta.total);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }

    const getMe = async () => {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUser(data);
    };

    getMe();
  }, []);

  useEffect(() => {
    getHistory(page);
  }, [search, page]);

  const handleCertificateDownload = async (eventId: number) => {
    try {
      const res = await fetch(`${API_URL}/certificate/${eventId}/download`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!res.ok) {
        alert("Certificate not available");
        return;
      }

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate-${eventId}.pdf`;

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to download certificate");
    }
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const formatNumber = (num: any) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F9FAFB]">
        <div className="max-w-[1029px] mx-auto">
          <div className="breadcrumbs text-sm py-5">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <p>{user?.name}</p>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-white shadow-sm p-5 rounded-[10px] border">
              <div className="flex items-center gap-6">
                {user?.image ? (
                  <img
                    src={user.image}
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={Avatar}
                    className="w-[100px] rounded-xl object-cover"
                  />
                )}
                <div>
                  <h2 className="text-[25px] tracking-wide font-medium">
                    {user?.name}
                  </h2>
                  <p className="text-[13px] tracking-wider text-gray-400">
                    {user?.email}
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={() => setModal(true)}
                      className="bg-yellow-primer text-[13px] px-3 py-[7px] rounded-[7px]"
                    >
                      Change Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] my-5"></div>
          <div className="mb-5 flex gap-3">
            <div className="flex-1 flex items-center justify-between bg-white rounded-[10px] p-4 shadow-sm border border-b-4 border-b-green-400 border-green-400">
              <div className="flex items-center gap-3">
                <div className="bg-green-300 px-[6px] py-[3px] rounded-[5px]">
                  <CalendarCheck width={18} color="green" />
                </div>
                <p className="text-[14px]">Event Joined</p>
              </div>
              <p className="font-medium">{count}</p>
            </div>
            <div className="flex-1 flex items-center justify-between bg-white rounded-[10px] p-4 shadow-sm border border-b-4 border-b-green-400 border-green-400">
              <div className="flex items-center gap-3">
                <div className="bg-green-300 px-[6px] py-[3px] rounded-[5px]">
                  <CalendarCheck width={18} color="green" />
                </div>
                <p className="text-[14px]">Event Joined</p>
              </div>
              <p className="font-medium">{count}</p>
            </div>
            <div className="flex-1 flex items-center justify-between bg-white rounded-[10px] p-4 shadow-sm border border-b-4 border-b-green-400 border-green-400">
              <div className="flex items-center gap-3">
                <div className="bg-green-300 px-[6px] py-[3px] rounded-[5px]">
                  <CalendarCheck width={18} color="green" />
                </div>
                <p className="text-[14px]">Event Joined</p>
              </div>
              <p className="font-medium">{count}</p>
            </div>
          </div>
          <div>
            <div className="bg-[#F9FAFB]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold ">Event History</h2>
                <input
                  type="text"
                  placeholder="Search events..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border text-[15px] px-2 py-1 w-[250px] rounded-[5px]"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border bg-white border-gray-200 rounded-lg">
                  <thead className="bg-gray-100 ">
                    <tr>
                      <th className="text-left px-6 py-3 text-[11px] font-normal tracking-wider">
                        EVENT
                      </th>
                      <th className="text-left px-6 py-3 text-[11px] font-normal tracking-wider">
                        DATE
                      </th>
                      <th className="text-left px-6 py-3 text-[11px] font-normal tracking-wider">
                        STATUS
                      </th>
                      <th className="text-left px-6 py-3 text-[11px] font-normal tracking-wider">
                        LOCATION
                      </th>
                      <th className="text-left px-6 py-3 text-[11px] font-normal tracking-wider">
                        CERTIFICATE
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td className="px-6 py-3 text-sm  w-[290px]">
                          <p className="line-clamp-2 font-medium">
                            {event.title}
                          </p>
                        </td>
                        <td className="px-6 py-3 text-sm w-[200px]">
                          <p>{formatEventDate(event.startAt)} WIB</p>
                        </td>
                        <td className="px-6 py-3 text-sm">
                          <p>{event.status.name}</p>
                        </td>
                        <td className="px-6 py-3 text-sm  w-[100px]">
                          {/* <a
                            className="line-clamp-1 text-blue"
                            href={
                              event.locationType === "online"
                                ? event.meetingLink
                                : "null"
                            }
                          >
                            {event.locationType === "online"
                              ? event.meetingLink
                              : event.location}
                          </a> */}

                          {event.locationType === "online" ? (
                            <a
                              className="line-clamp-1 text-blue"
                              href={
                                event.locationType === "online"
                                  ? event.meetingLink
                                  : "null"
                              }
                            >
                              {event.meetingLink}
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                setQrModal(true);
                                setSelectedTicket(
                                  event.EventParticipantModels?.[0]?.ticketCode,
                                );
                              }}
                              className="bg-green-400 px-3 text-[13px] py-1 rounded-[5px] text-white"
                            >
                              QR Code
                            </button>
                          )}
                        </td>
                        <td className="px-6 text-sm">
                          {event.Certificates.length > 0 &&
                          event.status.name === "Ended" ? (
                            <button
                              onClick={() =>
                                handleCertificateDownload(event.id)
                              }
                            >
                              <Download width={20} />
                            </button>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-2 text-[14px]">
            <div className="flex bg-white items-center rounded-[5px] w-fit overflow-hidden border">
              {/* Prev */}
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="px-4 py-2 border-r hover:bg-gray-100 disabled:opacity-40"
              >
                Prev
              </button>

              {/* Page Info */}
              <div className="px-6 py-2 text-[14px]">
                {formatNumber(page)} - {formatNumber(totalPages)}
              </div>

              {/* Next */}
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="px-4 py-2 border-l hover:bg-gray-100 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <Footer />
        </div>
      </div>
      {modal && <UpdateUser onClose={() => setModal(false)} id={user?.id} />}
      {qrModal && (
        <QrModal
          onClose={() => setQrModal(false)}
          ticketCode={selectedTicket}
        />
      )}
    </>
  );
};

export default UserDashboard;
