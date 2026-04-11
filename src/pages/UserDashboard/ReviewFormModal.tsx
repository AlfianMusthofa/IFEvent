import { CirclePlus, X } from "lucide-react";
import { useEventById } from "./hook/useEvent";
import { formatEventDate2 } from "../../utils/date";
import { StarInput } from "../../components/starInput";
import { useEffect, useState } from "react";
import { usePostReview } from "./hook/useReview";
import { toast } from "react-toastify";

const ReviewFormModal = ({ onClose, eventId }: any) => {
  const [preview, setPreview] = useState<string | null>(null);
  const { event } = useEventById(eventId);

  const [form, setForm] = useState({
    image: null as File | null,
    rating: 0,
    content: "",
  });

  const ApiUrl = import.meta.env.VITE_API_URL;
  const { postReview } = usePostReview(eventId);

  useEffect(() => {
    const fetchMyReview = async () => {
      try {
        const res = await fetch(`${ApiUrl}/events/${eventId}/my-review`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const data = await res.json();

        if (data.myReview) {
          setForm({
            image: null,
            rating: data.myReview.rating,
            content: data.myReview.content || "",
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchMyReview();
  }, [eventId]);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setForm((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async () => {
    try {
      await postReview(form);
      toast.success("Review Success");
      onClose();
    } catch (err) {
      toast.error("Review Failed");
      console.error(err);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative bg-white rounded-lg shadow-lg flex flex-col max-w-[850px] max-h-[650px]">
          <div className="flex items-end p-4 border-b flex-shrink-0">
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2 overflow-y-auto">
            <div>
              <span className="text-[12px] bg-yellow-secondary px-[8px] py-[4px] rounded-full tracking-wide">
                POST-EVENT FEEDBACK
              </span>
              <h2 className="text-[20px] font-bold tracking-wide my-2">
                {event?.title}
              </h2>
              <div>
                <p className="text-sm font">
                  Conducted in {formatEventDate2(event?.startAt)}. Your insight
                  help us curate better experience for the creator community.
                </p>
              </div>
              <div className="mt-3">
                <img
                  src={event?.image}
                  alt="image event"
                  loading="lazy"
                  className="w-full h-[210px] object-cover rounded-[10px]"
                />
              </div>
            </div>
            <div className="border p-2 rounded-[8px]">
              <div>
                <span className="text-[12px] tracking-wider">
                  OVERALL EXPERIENCE
                </span>
                <div className="my-2">
                  <StarInput
                    value={form.rating}
                    onChange={(val) =>
                      setForm((prev) => ({
                        ...prev,
                        rating: val,
                      }))
                    }
                  />
                </div>
              </div>
              <div>
                <span className="text-[12px] tracking-wider">
                  TELL US MORE ABOUT YOUR EXPERIENCE
                </span>
                <div className="my-2">
                  <textarea
                    className="rounded-[8px] resize-none border outline-none w-full h-[150px] text-[14px] p-2 bg-gray-100"
                    placeholder="What were the highlights? What could we impove?"
                    value={form.content}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>
              </div>
              <div>
                <span className="text-[12px] tracking-wider">
                  UPLOAD EVENT PHOTO (Optional)
                </span>
                <div className="mt-2">
                  <label
                    htmlFor="review-photo"
                    className="cursor-pointer h-[200px]  mt-2 
             rounded-md border border-dashed border-gray-400 
             flex justify-center items-center overflow-hidden"
                  >
                    <input
                      id="review-photo"
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
                        <span className="text-[12px]">Click to browse</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="mt-2 w-full rounded-[6px] text-white tracking-wide py-[8px] text-[14px] bg-gradient-to-r from-[#EC5B13] to-[#CF4D58]"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewFormModal;
