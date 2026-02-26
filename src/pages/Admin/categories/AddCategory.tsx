import { X } from "lucide-react";
import { useState } from "react";
import { API_URL } from "../../../service/api";
import { toast } from "react-toastify";

const AddCategory = ({ onClose }: any) => {
  const [name, setName] = useState("");

  const handleSave = async () => {
    if (!name) {
      toast.warning("Field are required!");
      return;
    }

    const toastId = toast.loading("Please wait...");

    try {
      await fetch(`${API_URL}/category`, {
        method: "POST",
        body: JSON.stringify({ name }),
      });

      toast.update(toastId, {
        render: "Category Added",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });

      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: "Failed to add category",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative bg-white rounded-lg shadow-lg w-[500px] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Add Category</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="p-3">
            <div>
              <p className="text-[13px]">Category Name</p>
              <input
                type="text"
                className="text-[14px] border border-gray-200 w-full p-2 mt-1 rounded-[6px]"
                placeholder="Enter category name"
                onChange={(e) => setName(e.target.value)}
              />
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

export default AddCategory;
