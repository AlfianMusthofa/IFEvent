import { useState } from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import Avatar from "../../assets/icons/userAvatar.png";
import Footer from "../../components/Footer";
import { formatEventDate } from "../../utils/date";
import { CalendarCheck, Download } from "lucide-react";
import UpdateUser from "./UpdateUser";
import QrModal from "./QrModal";
import ReviewFormModal from "./ReviewFormModal";
import { useCertificate } from "./hook/useCertificate";
import Pagination from "../../components/Pagination";
import { useCheckMyReview } from "./hook/useReview";
import { useHistory } from "./hook/useHistory";
import { useGetMe } from "./hook/useGetMe";

const UserDashboard = () => {
  const [modal, setModal] = useState(false);
  const [qrModal, setQrModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [modalReview, setModalReview] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const { events, page, setPage, totalPages, count, search, setSearch } =
    useHistory();

  const { user } = useGetMe();

  const { handleCertificateDownload } = useCertificate();

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const { reviews } = useCheckMyReview(events);

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
            <div className="flex gap-3">
              <div className="flex-1 bg-white shadow-sm p-5 rounded-[10px] border">
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
                      <th className="text-left px-6 py-3 text-[11px] font-normal tracking-wider">
                        REVIEW
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
                          {event.locationType === "online" ? (
                            <a
                              className="line-clamp-1 text-blue"
                              href={
                                event.locationType === "online"
                                  ? event.meetingLink
                                  : "null"
                              }
                            >
                              {/* {event.meetingLink} */}
                              <button className="bg-green-400 px-3 text-[13px] py-1 rounded-[5px] text-white">
                                <a href={event.meetingLink} target="_blank">
                                  Video
                                </a>
                              </button>
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
                              Ticket
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
                              <Download width={19} />
                            </button>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td>
                          {event.status.name !== "Active" ? (
                            <button
                              onClick={() => {
                                setSelectedEventId(event.id);
                                setModalReview(true);
                              }}
                              className={
                                reviews[event.id]
                                  ? "bg-green-400 px-3 py-1 rounded text-white"
                                  : "border border-green-400 px-3 py-1 rounded text-green-400"
                              }
                            >
                              <p className="text-sm">
                                {reviews[event.id] ? "Reviewed" : "Review"}
                              </p>
                            </button>
                          ) : (
                            <span className="text-gray-400">-</span>
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
            <Pagination
              onNext={handleNext}
              onPrev={handlePrev}
              page={page}
              totalPages={totalPages}
            />
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
      {modalReview && (
        <ReviewFormModal
          onClose={() => setModalReview(false)}
          eventId={selectedEventId}
        />
      )}
    </>
  );
};

export default UserDashboard;
