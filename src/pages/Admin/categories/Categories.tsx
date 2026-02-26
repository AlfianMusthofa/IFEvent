import { useEffect, useState } from "react";
import Navbar from "../../../components/Admin/Navbar";
import { API_URL } from "../../../service/api";
import AddCategory from "./AddCategory";

const Categories = () => {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const cat = async () => {
      const response = await fetch(`${API_URL}/category`);
      const data = await response.json();
      setItems(data);
    };
    cat();
  }, []);

  return (
    <>
      <Navbar path="Categories" />
      <div className="flex justify-end">
        <button
          className="mt-3 bg-green-400 px-5 py-2 rounded-full cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          <p className="text-[12px] text-white">Add Category +</p>
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white flex items-center gap-4 p-3 rounded-[7px]"
          >
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      {openModal && <AddCategory onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Categories;
