import Navbar from "../../components/navbar";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import tiktok from "../../assets/icons/tiktok.png";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";
import Category from "../../components/ClassList/Category";

export interface EventProps {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

interface CategoryProps {
  id: number;
  name: string;
  Events: EventProps[];
}

const ClassList = () => {
  const [category, setCategory] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`${API_URL}/category/events`);
      const data = await response.json();
      setCategory(data);
    };

    fetchCategory();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white h-[225px] flex justify-center items-center">
        <h1 className="text-[70px] font-semibold text-yellow-primer">Events</h1>
      </div>
      <div className="max-w-[1029px] mx-auto py-[35px] flex items-center justify-between gap-[20px]">
        <p className="w-[600px] text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in aperiam
          aspernatur mollitia quibusdam quod fugiat repudiandae itaque,
          laboriosam esse tenetur ratione, illum aut, quia molestiae. Aliquam id
          pariatur facilis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos, inventore? Itaque dicta explicabo quasi aut natus
          expedita repellat sit blanditiis!
        </p>
        <div className="flex gap-[15px]">
          <div className="bg-white p-[6px] rounded-full">
            <a href="#">
              <img src={facebook} className="w-[33px]" />
            </a>
          </div>
          <div className="bg-white p-[6px] rounded-full">
            <a href="#">
              <img src={instagram} className="w-[33px]" />
            </a>
          </div>
          <div className="bg-white p-[6px] rounded-full">
            <a href="#">
              <img src={youtube} className="w-[33px]" />
            </a>
          </div>
          <div className="bg-white p-[6px] rounded-full">
            <a href="#">
              <img src={tiktok} className="w-[33px]" />
            </a>
          </div>
        </div>
      </div>
      {/* EVENT LIST BY CATEGORY */}
      {category.map((cat) => (
        <Category key={cat.id} name={cat.name} events={cat.Events} />
      ))}
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default ClassList;
