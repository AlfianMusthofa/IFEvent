import { CirclePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";
import { toast } from "react-toastify";

const UpdateUser = ({ onClose, id }: any) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchUser = async () => {
    const res = await fetch(`${API_URL}/users/${id}`, {
      headers: {
        Athorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const user = await res.json();
    setName(user.name);
    setEmail(user.email);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image!);

    const toastId = toast.loading("Loading...");

    try {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to update");
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

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImage(file);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative bg-white rounded-lg shadow-lg w-[600px]  flex flex-col">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Update User</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1">
            <div className="flex gap-3 items-center">
              <div>
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
              <div className="flex-1 ">
                <div>
                  <input
                    value={name}
                    type="text"
                    className="text-[14px] border border-gray-200 w-full p-2  rounded-[6px]"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="my-[10px]">
                  <input
                    value={email}
                    type="text"
                    className="text-[14px] border border-gray-200 w-full p-2 rounded-[6px]"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="text-[14px] border border-gray-200 w-full p-2 rounded-[6px]"
                    placeholder="Enter password (optional)"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
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

export default UpdateUser;
