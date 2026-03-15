import { CirclePlus, X } from "lucide-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import { API_URL } from "../../../service/api";
import DOMPurify from "dompurify";

const AddMentor = ({ onClose }: any) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = async () => {
    if (!name || !position || !bio || !(image instanceof File)) {
      toast.warning("All fields are required!");
      return;
    }

    const sanitizeBio = DOMPurify.sanitize(bio, {
      ALLOWED_TAGS: ["p", "br", "strong", "em", "u", "ul", "ol", "li", "a"],
      ALLOWED_ATTR: ["href", "target", "rel"],
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("bio", sanitizeBio);
    formData.append("image", image);
    const toastId = toast.loading("Loading...");

    try {
      const res = await fetch(`${API_URL}/mentors`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        toast.update(toastId, {
          render: "Failed to add mentor",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }

      toast.update(toastId, {
        render: "Mentor Added",
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
        render: "Failed to add mentor",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImage(file);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative bg-white rounded-lg shadow-lg w-[600px] h-[500px] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Add Mentor</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <div>
              <p className="text-[13px]">Name</p>
              <input
                type="text"
                className="text-[14px] border border-gray-200 w-full p-2 mt-[8px] rounded-[6px]"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <p className="text-[13px]">Position</p>
              <input
                type="text"
                className="text-[14px] border border-gray-200 w-full p-2 mt-[8px] rounded-[6px]"
                placeholder="Enter position"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <p className="text-[13px]">Bio</p>
              <ReactQuill
                theme="snow"
                className="mt-1 [&_.ql-editor]:h-[120px] [&_.ql-editor]:overflow-y-auto"
                onChange={(e) => {
                  setBio(e);
                }}
              />
            </div>
            <div className="mt-2">
              <p className="text-[13px]">Image</p>
              <label
                htmlFor="image-mentor"
                className="cursor-pointer h-[150px] w-[150px] mt-2 
             rounded-md border border-dashed border-black 
             flex justify-center items-center overflow-hidden"
              >
                <input
                  id="image-mentor"
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
                  </div>
                )}
              </label>
            </div>
            <button
              onClick={handleSave}
              className="text-[14px] text-white mt-3 w-full bg-green-500 text-center py-2 rounded-[5px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMentor;
