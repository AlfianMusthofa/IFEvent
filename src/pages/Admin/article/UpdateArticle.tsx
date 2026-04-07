import { CirclePlus, FileImage, Info, X } from "lucide-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

const UpdateArticle = ({ onClose, slug }: any) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoriesId, setCategoriesId] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState("");

  const ApiUrl = import.meta.env.VITE_API_URL;

  const fetchCategory = async () => {
    const response = await fetch(`${ApiUrl}/category`);
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const getArticle = async () => {
    const res = await fetch(`${ApiUrl}/articles/${slug}`);
    const data = await res.json();
    console.log(data);
    setTitle(data.article.title);
    setContent(data.article.content);
    setCategoriesId(data.article.categoryId);
    setPreview(data.article.image);
    setImageFile(null);
    setExistingImage(data.image);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImageFile(file);
  };

  useEffect(() => {
    getArticle();
  }, []);

  const handleSave = async () => {
    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      formData.append("image", existingImage);
    }

    formData.append("title", title);
    formData.append("content", content);
    formData.append("categoryId", categoriesId);

    const toastId = toast.loading("Loading...");

    //  for (const [key, value] of formData.entries()) {
    //    console.log(key, value);
    //  }

    //  return;

    try {
      const save = await fetch(`${ApiUrl}/articles/${slug}`, {
        method: "PATCH",
        body: formData,
      });

      if (!save.ok) {
        toast.update(toastId, {
          render: "Failed to update",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }

      toast.update(toastId, {
        render: "Article Updated",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });

      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1200);
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to update",
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
        <div className="relative bg-white rounded-lg shadow-lg  h-[500px] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <h2 className="text-[19px] font-medium">Update Article</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="p-4 overflow-y-auto flex-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[#e0e0ff] px-[8px] py-[5px] rounded-[5px]">
                <FileImage width={20} color="#343d96" />
              </div>
              <h2 className="font-medium tracking-wide">Article Banner</h2>
            </div>
            <div>
              <label
                htmlFor="image-article"
                className="cursor-pointer h-[200px] w-[350px]  mt-2 
             rounded-md border border-dashed border-black 
             flex justify-center items-center overflow-hidden object-cover"
              >
                <input
                  id="image-article"
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
            <div className="my-4 flex items-center gap-3">
              <div className="bg-[#ffdbcb] px-[8px] py-[5px] rounded-[5px]">
                <Info width={20} color="red" />
              </div>
              <h2 className="font-medium tracking-wide">General Information</h2>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  className="bg-[#f3f4f5] text-[14px] border border-gray-200 w-full p-2 rounded-[6px] outline-none"
                  placeholder="Enter article title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <select
                value={categoriesId}
                onChange={(e) => setCategoriesId(e.target.value)}
                className="flex-1 w-full border bg-[#f1f5f9] outline-none py-[9px] px-[7px] text-[13px] rounded-[5px] appearance-none cursor-pointer"
              >
                <option value="">Select Category</option>
                {categories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-4 flex items-center gap-3">
              <div className="bg-[#ffdbcb] px-[8px] py-[5px] rounded-[5px]">
                <Info width={20} color="red" />
              </div>
              <h2 className="font-medium tracking-wide">Narrative Content</h2>
            </div>
            <div>
              <ReactQuill
                theme="snow"
                value={content}
                className="mt-1 [&_.ql-editor]:h-[250px] w-[600px] [&_.ql-editor]:overflow-y-auto"
                onChange={(e) => setContent(e)}
              />
            </div>
            <div className="my-3 flex items-center gap-2">
              <button
                onClick={handleSave}
                className="text-white flex-1 bg-green-500 w-full text-[15px] tracking-wider py-[7px]  rounded-[5px]"
              >
                Save
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

export default UpdateArticle;
