import Navbar from "../../components/navbar";
import Hero from "./components/Hero";
import OrganizerLayout from "./components/OrganizerLayou";
import Contact from "./components/Contact";
import Social from "./components/Social";
import { useParams } from "react-router-dom";
import { useOrganizer } from "./hooks/useOrganizer";
import { useEvents } from "./hooks/useEvents";
import UpcomingEventsCarousels from "./components/UpcomingEventsCarousels";

const Organizer = () => {
  const { slug } = useParams();
  const { data } = useOrganizer(slug ?? "");
  const { upcomingEvents } = useEvents(slug ?? "");
  console.log(upcomingEvents);

  return (
    <>
      <Navbar />
      <div className="max-w-[1029px] mx-auto">
        <Hero
          name={data?.name ?? ""}
          descrtiption={data?.description ?? ""}
          total_events={data?.total_events ?? 0}
          followers={data?.followers ?? 0}
          location={data?.location ?? "no add"}
        />
      </div>
    </>
  );
};

export default Organizer;
