import { CirclePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { API_URL } from "../../../service/api";

const CreateArticle = ({ onClose }: any) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");
  const [bio, setBio] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [categoriesId, setCategoriesId] = useState<number | null>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImage(file);
  };

  const fetchCategory = async () => {
    const response = await fetch(`${API_URL}/category`);
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

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
              <p className="text-[13px]">Image</p>
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
            <div className="my-3">
              <select
                value={String(categoriesId)}
                onChange={(e) => setCategoriesId(Number(e.target.value))}
                className="w-full border bg-[#f1f5f9] outline-none px-3 py-[7px] text-[13px] rounded-[5px] appearance-none cursor-pointer"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <ReactQuill
                theme="snow"
                className="mt-1 [&_.ql-editor]:h-[250px] [&_.ql-editor]:overflow-y-auto"
                onChange={(e) => {
                  setBio(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArticle;
