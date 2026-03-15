import { CirclePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "../../../service/api";
import { formatForInput } from "../../../utils/date";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

interface MentorProps {
  id: number;
  name: string;
}

interface CategoryProps {
  id: number;
  name: string;
}

interface StatusProps {
  id: number;
  name: string;
}

const UpdateEvent = ({ onClose, id }: any) => {
  const [mentors, setMentors] = useState<MentorProps[]>([]);
  const [eventName, setEventName] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const [location, setLocation] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [locationType, setLocationType] = useState<"offline" | "online">(
    "offline",
  );
  const [priceType, setPriceType] = useState<"free" | "paid">("free");
  const [price, setPrice] = useState("");
  const [mentorId, setMentorId] = useState<number | null>(null);
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [capacity, setCapacity] = useState<number | null>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);

  const [exisDateTime, setExisDateTime] = useState("");
  const [existEndDateTime, setExisEndDateTime] = useState("");

  const [statuses, setStatuses] = useState<StatusProps[]>([]);
  const [statusId, setStatusId] = useState<number | null>(null);

  const [existCertificate, setExisCertificate] = useState<string | null>(null);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [previewCertificate, setPreviewCertificate] = useState<string | null>(
    null,
  );

  const handleChangeType = (type: "offline" | "online") => {
    setLocationType(type);
    setLocation("");
    setMeetingLink("");
  };

  const handleChangeTypePaid = (type: "free" | "paid") => {
    setPriceType(type);
    setPrice("");
  };

  const fetchMentors = async () => {
    const res = await fetch(`${API_URL}/mentors`);
    const data = await res.json();
    setMentors(data.data);
  };

  const fetchCategory = async () => {
    const response = await fetch(`${API_URL}/category`);
    const data = await response.json();
    setCategories(data.data);
  };

  const fetchStatus = async () => {
    const response = await fetch(`${API_URL}/status`);
    const data = await response.json();
    setStatuses(data);
  };

  const fetchEvent = async () => {
    const response = await fetch(`${API_URL}/events/${id}`);
    const data = await response.json();
    console.log(data);

    setEventName(data.title);
    setLocationType(data.locationType);
    setLocation(data.location);
    setMeetingLink(data.meetingLink);
    setCategoryId(data.categoryId);
    setMentorId(data.mentorId);
    setDesc(data.description);
    setCapacity(data.capacity);
    setPriceType(data.priceType);
    setPrice(data.price);
    setPreview(data.image);
    setExistingImage(data.image);
    setImageFile(null);
    setExisDateTime(data.startAt);
    setExisEndDateTime(data.endAt);
    setStatusId(data.statusId);
    setPreviewCertificate(data.Certificates?.[0]?.templatePath ?? null);
    setExisCertificate(data.Certificates?.[0]?.templatePath ?? null);
    setCertificateFile(null);

    const { date, time } = formatForInput(data.startAt);
    setDate(date);
    setTime(time);

    const { date: endDate, time: endTime } = formatForInput(data.endAt);
    setEndDate(endDate);
    setEndTime(endTime);
  };

  useEffect(() => {
    fetchEvent();
    fetchMentors();
    fetchCategory();
    fetchStatus();
  }, []);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImageFile(file);
  };

  const handleCertficicateChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrlCertif = URL.createObjectURL(file);
    setPreviewCertificate(previewUrlCertif);
    setCertificateFile(file);
  };

  const buildStartAt = () => {
    if (!date || !time) {
      return exisDateTime;
    }
    const newIso = new Date(`${date}T${time}`).toISOString();
    if (newIso === exisDateTime) {
      return exisDateTime;
    }
    return newIso;
  };

  const buildEndAt = () => {
    if (!endDate || !endTime) {
      return existEndDateTime;
    }
    const newIso = new Date(`${endDate}T${endTime}`).toISOString();
    if (newIso === existEndDateTime) {
      return existEndDateTime;
    }
    return newIso;
  };

  const handleSave = async () => {
    const formData = new FormData();
    const formDataCertif = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    } else if (existingImage) {
      formData.append("image", existingImage);
    }

    const startAt = buildStartAt();
    const endAt = buildEndAt();

    if (startAt && startAt !== exisDateTime) {
      formData.append("startAt", startAt);
    } else {
      formData.append("startAt", exisDateTime);
    }

    if (endAt && endAt !== existEndDateTime) {
      formData.append("endAt", endAt);
    } else {
      formData.append("endAt", existEndDateTime);
    }

    formData.append("title", eventName);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("locationType", locationType);
    formData.append("priceType", priceType);
    formData.append("meetingLink", meetingLink);
    formData.append("location", location);
    formData.append("capacity", String(capacity ?? ""));
    formData.append("mentorId", String(mentorId ?? ""));
    formData.append("categoryId", String(categoryId ?? ""));
    formData.append("statusId", String(statusId ?? ""));

    const toastId = toast.loading("Updating event...");

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const res = await fetch(`${API_URL}/events/id/${id}`, {
        method: "PATCH",
        body: formData,
      });

      if (certificateFile) {
        formDataCertif.append("template", certificateFile);
        const resCertificate = await fetch(
          `${API_URL}/certificate/${id}/update`,
          {
            method: "PUT",
            body: formDataCertif,
          },
        );
        if (!resCertificate.ok) {
          throw new Error("Failed to update certificate");
        }
      }

      if (!res.ok) {
        throw new Error("Failed to update event");
      }

      toast.update(toastId, {
        render: "Event Updated",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });

      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1200);
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: "Failed to update event",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />

        <div className="relative bg-white rounded-lg shadow-lg w-[600px] h-[500px] flex flex-col z-10">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Update Event</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          {/* content */}
          <div className="p-4 overflow-y-auto flex-1">
            <div className="flex justify-between items-center gap-2">
              <div className="flex-1">
                <p className="text-[13px]">Event Name</p>
                <input
                  type="text"
                  className="text-[14px] border border-gray-200 w-full p-2 mt-1 rounded-[6px]"
                  placeholder="Enter event name"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">Status</p>
                <select
                  onChange={(e) => setStatusId(Number(e.target.value))}
                  value={String(statusId)}
                  className="mt-1 w-full p-2 text-[14px] border border-gray-200 rounded-[6px]"
                >
                  <option value="">Choose status</option>
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="mt-3 flex items-center gap-2 w-full">
              <div className="flex-1">
                <p className="text-[13px]">Start Date</p>
                <input
                  type="date"
                  className="text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">Time</p>
                <input
                  type="time"
                  className="text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 w-full">
              <div className="flex-1">
                <p className="text-[13px]">End Date</p>
                <input
                  type="date"
                  className="text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">Time</p>
                <input
                  type="time"
                  className="text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setEndTime(e.target.value)}
                  value={endTime}
                />
              </div>
            </div>

            <div className="mt-3">
              <div>
                <p className="text-[13px] mb-1">Location</p>
                {/* Radio Button */}
                <div className="flex gap-4 text-[14px]">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="locationType"
                      value="offline"
                      checked={locationType === "offline"}
                      onChange={() => handleChangeType("offline")}
                    />
                    Offline
                  </label>

                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="locationType"
                      value="online"
                      checked={locationType === "online"}
                      onChange={() => setLocationType("online")}
                    />
                    Online
                  </label>
                </div>

                {/* OFFLINE */}
                {locationType === "offline" && (
                  <input
                    type="text"
                    className="text-[14px] border border-gray-200 w-full p-2 mt-2 rounded-[6px]"
                    placeholder="Enter event location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                )}

                {/* ONLINE */}
                {locationType === "online" && (
                  <input
                    type="text"
                    className="text-[14px] border border-gray-200 w-full p-2 mt-2 rounded-[6px]"
                    placeholder="Enter meeting link (Zoom, Google Meet, etc)"
                    value={meetingLink}
                    onChange={(e) => setMeetingLink(e.target.value)}
                  />
                )}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex-1">
                <p className="text-[13px]">Category</p>
                <select
                  className="mt-1 w-full p-2 text-[14px] border border-gray-200 rounded-[6px]"
                  value={String(categoryId)}
                  onChange={(e) => setCategoryId(Number(e.target.value))}
                >
                  <option value="">Choose Category</option>
                  {categories.map((categori) => (
                    <option value={categori.id} key={categori.id}>
                      {categori.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <p className="text-[13px]">Mentor</p>
                <select
                  className="mt-1 w-full p-2 text-[14px] border border-gray-200 rounded-[6px]"
                  value={String(mentorId)}
                  onChange={(e) => setMentorId(Number(e.target.value))}
                >
                  <option value="">Choose mentor</option>
                  {mentors.map((mentor) => (
                    <option value={mentor.id} key={mentor.id}>
                      {mentor.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-[13px]">Description</p>
              <ReactQuill
                theme="snow"
                value={desc}
                className="mt-1 [&_.ql-editor]:h-[120px] [&_.ql-editor]:overflow-y-auto"
                onChange={(e) => {
                  setDesc(e);
                }}
              />
            </div>

            <div className="mt-3">
              <p className="text-[13px]">Event Capacity</p>
              <input
                type="number"
                className="text-[14px] border border-gray-200 w-full p-2 mt-1 rounded-[6px]"
                placeholder="Enter capacity"
                value={String(capacity)}
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </div>

            <div className="mt-3">
              <p className="text-[13px] mb-1">Event Price</p>
              {/* Radio Button */}
              <div className="flex gap-4 text-[14px]">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="priceType"
                    value="free"
                    checked={priceType === "free"}
                    onChange={() => handleChangeTypePaid("free")}
                  />
                  Free
                </label>

                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="priceType"
                    value="paid"
                    checked={priceType === "paid"}
                    onChange={() => setPriceType("paid")}
                  />
                  Paid
                </label>
              </div>
              {priceType === "paid" && (
                <input
                  type="number"
                  className="text-[14px] border border-gray-200 w-full p-2 mt-2 rounded-[6px]"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              )}
            </div>

            <div className="mt-3">
              <p className="text-[13px]">Event Image</p>
              <label
                htmlFor="image-upload"
                className="cursor-pointer h-[150px] w-[240px] mt-2 
             rounded-md border border-dashed border-black 
             flex justify-center items-center overflow-hidden"
              >
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />

                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-gray-600">
                    <CirclePlus />
                    <p className="text-[12px]">Image</p>
                  </div>
                )}
              </label>
            </div>
            <div className="mt-3">
              <p className="text-[13px]">Event Certificate</p>
              <label
                htmlFor="image-upload-certif"
                className="cursor-pointer h-[150px] w-[240px] mt-2 
             rounded-md border border-dashed border-black 
             flex justify-center items-center overflow-hidden"
              >
                <input
                  id="image-upload-certif"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCertficicateChange}
                />

                {previewCertificate ? (
                  <img
                    src={previewCertificate}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-gray-600">
                    <CirclePlus />
                    <p className="text-[12px]">Image</p>
                  </div>
                )}
              </label>
            </div>

            <div className="">
              <button
                onClick={handleSave}
                className="text-[14px] text-white mt-3 w-full bg-green-500 text-center py-2 rounded-[5px]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEvent;
