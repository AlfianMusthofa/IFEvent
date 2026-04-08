import { CirclePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { API_URL } from "../../../service/api";
import { toast } from "react-toastify";
import RichTextEditor from "../../../Tiptap";

const CreateArticle = ({ onClose }: any) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<any>([]);

  const [form, setForm] = useState({
    image: null as File | null,
    title: "",
    content: "",
    categoriesId: "",
  });

  const ApiUrl = import.meta.env.VITE_API_URL;

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setForm((prev) => ({ ...prev, image: file }));
  };

  const fetchCategory = async () => {
    const response = await fetch(`${API_URL}/category`);
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    formData.append("image", form.image!);
    formData.append("categoryId", form.categoriesId!);

    const toastId = toast.loading("Loading...");

    try {
      const res = await fetch(`${ApiUrl}/articles`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create Article");
      }

      toast.update(toastId, {
        render: "Article Added",
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
        render: "Failed to create article",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />

        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-[600px] h-[500px] flex flex-col z-10">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Create Article</h2>
            <button
              onClick={onClose}
              className="hover:bg-gray-100 p-1 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 flex-grow overflow-y-auto">
            {/* Isi form mentor kamu */}
            <div className="">
              <p className="text-[13px] tracking-wider">1. COVER IMAGE</p>
              <label
                htmlFor="image-mentor"
                className="cursor-pointer h-[330px]  mt-2 
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
            <div className="my-5">
              <p className="text-[13px] tracking-wider mb-2">
                2. ARTICLE METADATA
              </p>
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    className="bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2 rounded-[6px] outline-none"
                    placeholder="Enter article title..."
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                </div>
                <select
                  value={String(form.categoriesId)}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      categoriesId: e.target.value,
                    }))
                  }
                  className="flex-1 w-full border bg-[#f1f5f9] outline-none p-2 text-[13px] rounded-[5px] appearance-none cursor-pointer"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <p className="text-[13px] tracking-wider mb-2">
                3. CONTENT NARRATIVE
              </p>
              {/* <ReactQuill
                theme="snow"
                className="mt-1 [&_.ql-editor]:h-[250px] [&_.ql-editor]:overflow-y-auto"
                modules={{
                  clipboard: {
                    matchVisual: false,
                  },
                }}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, content: value }))
                }
              /> */}
              <RichTextEditor
                value={form.content}
                onChange={(val: any) =>
                  setForm((prev) => ({ ...prev, content: val }))
                }
              />
            </div>
            <div className="my-3 flex items-center gap-2">
              <button
                onClick={handleSave}
                className="text-white flex-1 bg-green-500 w-full text-[15px] tracking-wider py-[7px]  rounded-[5px]"
              >
                Publish
              </button>
              <button className="text-white flex-1 bg-[#ec5b13] w-full text-[15px] tracking-wider py-[7px] rounded-[5px]">
                Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArticle;
