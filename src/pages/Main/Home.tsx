import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Home/Card";
import { useEffect, useState } from "react";
import Sponsors from "../../components/Home/Sponsors";
import { Typewriter } from "react-simple-typewriter";
import { API_URL } from "../../service/api";

interface EventsProps {
  title: string;
  id: number;
  description: string;
  slug: string;
  image: string;
}

const Home = () => {
  const [events, setEvents] = useState<EventsProps[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/events`)
      .then((res) => res.json())
      .then((result) => {
        setEvents(result.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="max-w-[1200px] mx-auto heroContent p-[15px] gap-[13px]">
          <h1 className="text-[46px] font-semibold text-white tracking-[1px]">
            <Typewriter words={["Welcome to ElevateHub!"]} cursor />
          </h1>
          <div className="py-[3px] px-[10px] bg-yellow-primer">
            <p className="font-semibold text-black tracking-[2px]">
              Knowledge and Skills Increase, Career and Business Soar
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-yellow-light gap-[40px] py-[50px]">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-black">350+</h3>
          <p className="font-semibold text-black">Participants</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-black">50+</h3>
          <p className="font-semibold text-black">Mentors</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-black">10+</h3>
          <p className="font-semibold text-black">Event are held</p>
        </div>
      </div>
      <div className="py-[30px] bg-white">
        <h2 className="text-center font-semibold text-black text-3xl">
          Events
        </h2>
        <div className="flex justify-center mt-[20px]">
          <div className="h-[2px] bg-black w-[600px]"></div>
        </div>
        <div className="max-w-[1029px] mx-auto mt-[30px] flex flex-wrap gap-[13px] justify-center">
          {events.map((event) => (
            <Card
              key={event.id}
              image={event.image}
              title={event.title}
              description={event.description}
              slug={event.slug}
            />
          ))}
        </div>
        <div className="flex justify-center mt-[40px]">
          <a
            href="/classlist"
            className="text-[14px] px-[30px] py-[10px] rounded-full bg-yellow-primer text-black tracking-wide font-medium"
          >
            See All Events
          </a>
        </div>
      </div>
      <Sponsors />
      <Footer />
    </>
  );
};

export default Home;
