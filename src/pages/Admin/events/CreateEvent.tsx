import {
  CirclePlus,
  Clock5,
  FileImage,
  Info,
  MapPin,
  Video,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { API_URL } from "../../../service/api";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";

interface MentorProps {
  id: number;
  name: string;
}

interface CategoryProps {
  id: number;
  name: string;
}

const CreateEvent = ({ onClose }: any) => {
  const [mentors, setMentors] = useState<MentorProps[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
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
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [capacity, setCapacity] = useState<number | null>(null);

  const handleChangeType = (type: "offline" | "online") => {
    setLocationType(type);
    setLocation("");
    setMeetingLink("");
  };

  const handleChangeTypePaid = (type: "free" | "paid") => {
    setPriceType(type);
    setPrice("");
  };

  const handleSave = async () => {
    // 1️⃣ VALIDASI DULU
    const isDescEmpty = !desc || desc === "<p><br></p>" || desc === "<p></p>";

    if (
      !eventName ||
      !date ||
      !time ||
      isDescEmpty ||
      !(image instanceof File) ||
      !categoryId ||
      !mentorId ||
      !capacity
    ) {
      toast.warning("All fields are required!");
      return;
    }

    if (locationType === "offline" && !location) {
      toast.warning("Location is required for offline event!");
      return;
    }

    // validasi khusus ONLINE
    if (locationType === "online" && !meetingLink) {
      toast.warning("Meeting link is required for online event!");
      return;
    }

    // 2️⃣ AMAN: DATE CONVERSION
    const startAtLocalDateTime = new Date(`${date}T${time}:00+07:00`);
    if (isNaN(startAtLocalDateTime.getTime())) {
      toast.error("Invalid StartAt");
      return;
    }

    const endAtLocalDateTime = new Date(`${endDate}T${endTime}:00+07:00`);
    if (isNaN(endAtLocalDateTime.getTime())) {
      toast.error("Invalid EndAt");
      return;
    }

    const isoUTCStartAt = startAtLocalDateTime.toISOString();
    const isoUTCEndAt = endAtLocalDateTime.toISOString();

    // 3️⃣ SANITIZE
    const sanitizeDesc = DOMPurify.sanitize(desc, {
      ALLOWED_TAGS: ["p", "br", "strong", "em", "u", "ul", "ol", "li", "a"],
      ALLOWED_ATTR: ["href", "target", "rel"],
    });

    const statusId = 1;

    // 4️⃣ FORM DATA
    const formData = new FormData();
    formData.append("title", eventName);
    formData.append("description", sanitizeDesc);
    formData.append("startAt", isoUTCStartAt);
    formData.append("endAt", isoUTCEndAt);
    formData.append("image", image);
    formData.append("statusId", String(statusId));
    formData.append("categoryId", String(categoryId));
    formData.append("mentorId", String(mentorId));
    formData.append("capacity", String(capacity));
    formData.append("locationType", locationType);
    formData.append("priceType", priceType);

    const toastId = toast.loading("Creating event...");

    if (locationType === "offline") {
      formData.append("location", location);
    }

    if (locationType === "online") {
      formData.append("meetingLink", meetingLink);
    }

    const numericPrice = Number(price.replace(/\./g, ""));

    if (priceType === "paid") {
      formData.append("price", String(numericPrice));
    }

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const res = await fetch(`${API_URL}/events`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Failed to create event");
      }
      toast.update(toastId, {
        render: "Event Created",
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
        render: "Failed to create event",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
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

    fetchMentors();
    fetchCategory();
  }, []);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImage(file);
  };

  const formatRupiah = (value: any) => {
    const numberString = value.replace(/[^,\d]/g, "");
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    return rupiah;
  };

  const handleChangePrice = (e: any) => {
    const value = e.target.value;
    setPrice(formatRupiah(value));
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative bg-white rounded-lg shadow-lg w-[600px] h-[500px] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Create Event</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[#ffdbcb] px-[8px] py-[5px] rounded-[5px]">
                <Info width={20} color="red" />
              </div>
              <h2 className="font-medium tracking-wide">General Information</h2>
            </div>
            {/* Event Name */}
            <div>
              <p className="text-[13px]">Event Name</p>
              <input
                type="text"
                className="bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2 mt-1 rounded-[6px] outline-none"
                placeholder="e.g. Masterclass: Advanced UI Architecture"
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            {/* CATEGORY */}
            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex-1">
                <p className="text-[13px]">Category</p>
                <select
                  className="bg-[#f3f4f5] outline-none mt-1 w-full p-2 text-[14px] border border-gray-200 rounded-[6px]"
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
                <p className="text-[13px]">Mentor / Guest</p>
                <select
                  className="bg-[#f3f4f5] outline-none mt-1 w-full p-2 text-[14px] border border-gray-200 rounded-[6px]"
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

            {/* Description */}
            <div className="mt-3">
              <p className="text-[13px]">Description</p>
              <ReactQuill
                theme="snow"
                className="bg-[#f3f4f5] mt-1 [&_.ql-editor]:h-[120px] [&_.ql-editor]:overflow-y-auto"
                onChange={(e) => {
                  setDesc(e);
                }}
              />
            </div>

            <div className="border h-[1px] my-8"></div>

            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[#e0e0ff] px-[8px] py-[5px] rounded-[5px]">
                <Clock5 width={20} color="#343d96" />
              </div>
              <h2 className="font-medium tracking-wide">Time & Location</h2>
            </div>

            {/* DateTime StartAt */}
            <div className="mt-3 flex items-center gap-2 w-full">
              <div className="flex-1">
                <p className="text-[13px]">Start Date</p>
                <input
                  type="date"
                  className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">Time</p>
                <input
                  type="time"
                  className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 w-full">
              <div className="flex-1">
                <p className="text-[13px]">End Date</p>
                <input
                  type="date"
                  className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px]">Time</p>
                <input
                  type="time"
                  className=" outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 p-2 mt-1 rounded-[6px] w-full"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3">
              <div>
                <p className="text-[13px] mb-3">Event Format</p>
                <div className="flex gap-3 text-[14px]">
                  {/* OFFLINE */}
                  <label
                    className={`bg-[#f3f4f5] flex justify-center items-start gap-3 p-4 border rounded-[5px] cursor-pointer w-full transition shadow-sm
                              ${
                                locationType === "offline"
                                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                                  : "border-gray-300 hover:border-gray-400"
                              }
                           `}
                  >
                    <input
                      type="radio"
                      name="locationType"
                      value="offline"
                      checked={locationType === "offline"}
                      onChange={() => setLocationType("offline")}
                      className="hidden"
                    />

                    <div className="flex flex-col items-center">
                      <MapPin width={20} />
                      <p className="text-gray-500 text-[13px] font-medium">
                        In-Person Meet
                      </p>
                    </div>
                  </label>

                  {/* ONLINE */}
                  <label
                    className={`bg-[#f3f4f5] flex justify-center items-start gap-3 p-4 border rounded-[5px] cursor-pointer w-full transition shadow-sm
                                 ${
                                   locationType === "online"
                                     ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                                     : "border-gray-300 hover:border-gray-400"
                                 }
                              `}
                  >
                    <input
                      type="radio"
                      name="locationType"
                      value="online"
                      checked={locationType === "online"}
                      onChange={() => setLocationType("online")}
                      className="hidden"
                    />

                    <div className="flex flex-col items-center">
                      <Video width={20} />
                      <p className="text-gray-500 text-[13px] font-medium">
                        Online Session
                      </p>
                    </div>
                  </label>
                </div>

                <p className="text-[13px] mt-3">
                  Platform Link or Physical Address
                </p>

                {/* OFFLINE */}
                {locationType === "offline" && (
                  <input
                    type="text"
                    className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2 mt-2 rounded-[6px]"
                    placeholder="e.g. Paramount Hotel, Jakarta"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                )}

                {/* ONLINE */}
                {locationType === "online" && (
                  <input
                    type="text"
                    className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2 mt-2 rounded-[6px]"
                    placeholder="Enter meeting link (Zoom, Google Meet, etc)"
                    value={meetingLink}
                    onChange={(e) => setMeetingLink(e.target.value)}
                  />
                )}
              </div>
            </div>

            <div className="border h-[1px] my-8"></div>

            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[#ffdbcb] px-[8px] py-[5px] rounded-[5px]">
                <Info width={20} color="red" />
              </div>
              <h2 className="font-medium tracking-wide">Logistic</h2>
            </div>

            <div className="">
              <p className="text-[13px]">Event Capacity</p>
              <input
                type="number"
                className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2 mt-1 rounded-[6px]"
                placeholder="e.g. 100"
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </div>

            <div className="mt-3">
              <p className="text-[13px] mb-3">Pricing Model</p>
              <div className="flex gap-3 text-[14px]">
                <label
                  className={`bg-[#f3f4f5] flex items-center gap-3 p-4 border rounded-[5px] cursor-pointer w-full transition shadow-sm
                              ${
                                priceType === "free"
                                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                                  : "border-gray-300 hover:border-gray-400"
                              }
                           `}
                >
                  <input
                    type="radio"
                    name="priceType"
                    value="free"
                    checked={priceType === "free"}
                    onChange={() => handleChangeTypePaid("free")}
                    className="hidden"
                  />

                  <div>
                    <p className="font-semibold">Free</p>
                    <p className="text-gray-500 text-sm">
                      Free event without any fees
                    </p>
                  </div>
                </label>

                {/* PAID */}
                <label
                  className={`bg-[#f3f4f5] flex items-center gap-3 p-4 border rounded-[5px] cursor-pointer w-full transition shadow-sm
                              ${
                                priceType === "paid"
                                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                                  : "border-gray-300 hover:border-gray-400"
                              }
                           `}
                >
                  <input
                    type="radio"
                    name="priceType"
                    value="paid"
                    checked={priceType === "paid"}
                    onChange={() => setPriceType("paid")}
                    className="hidden"
                  />

                  <div>
                    <p className="font-semibold">Paid</p>
                    <p className="text-gray-500 text-sm">Paid Event</p>
                  </div>
                </label>
              </div>
              {priceType === "paid" && (
                <div>
                  <div>
                    <p className="text-[13px] mt-3 mb-2">Price (IDR)</p>
                    <input
                      type="text"
                      className="outline-none bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2  rounded-[6px]"
                      placeholder="Enter price"
                      value={price}
                      onChange={handleChangePrice}
                    />
                  </div>
                  <h1>ya</h1>
                </div>
              )}
            </div>

            <div className="border h-[1px] my-8"></div>

            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[#e0e0ff] px-[8px] py-[5px] rounded-[5px]">
                <FileImage width={20} color="#343d96" />
              </div>
              <h2 className="font-medium tracking-wide">Event Banner</h2>
            </div>

            {/* Event Image */}
            <div className="mt-3">
              <label
                htmlFor="image-upload"
                className="cursor-pointer h-[150px] w-[275px] mt-2 
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
                    <div className="text-center">
                      <p className="text-[12px] font-semibold tracking-wide">
                        Click to upload banner
                      </p>
                      <p className="text-[12px]">PNG, JPG or WebP</p>
                    </div>
                  </div>
                )}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="text-[14px] text-white mt-3 w-full bg-[#ec5b13] text-center py-2 rounded-[5px]"
              >
                Publish Event
              </button>
              <button
                onClick={() => handleSave(5)}
                className="text-[14px] text-white mt-3 w-full bg-green-500 text-center py-2 rounded-[5px]"
              >
                Save to Drafts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
