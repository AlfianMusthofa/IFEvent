import { useEffect, useState } from "react";
import Card from "../../../components/Home/Card";

const ApiUrl = import.meta.env.VITE_API_URL;

interface EventsProps {
  title: string;
  id: number;
  description: string;
  slug: string;
  image: string;
  startAt: string;
}

const Content = () => {
  const [events, setEvents] = useState<EventsProps[]>([]);

  useEffect(() => {
    fetch(`${ApiUrl}/events?limit=6&status=active`)
      .then((res) => res.json())
      .then((result) => {
        setEvents(result.data);
      });
  }, []);

  return (
    <>
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
              startAt={event.startAt}
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
    </>
  );
};

export default Content;
