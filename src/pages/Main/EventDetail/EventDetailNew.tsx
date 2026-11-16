import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/Footer";
import { useEventDetail } from "../hooks/useEventDetail";
import Metadata from "./components/Metadata";
import Countdown from "./components/Countdown";
import AboutMentor from "./components/AboutMentor";
import Capacity from "./components/Capacity";
import RegisterBtn from "./components/RegisterBtn";
import Minimap from "./components/Minimap";
import EventDescription from "./components/EventDescription";
import Title from "./components/Title";
import Organize from "./components/Organize";
import QnA from "./components/QnA";

const EventDetailNew = () => {
  const { slug } = useParams();

  const { event } = useEventDetail(slug ?? "");

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1029px]">
        <div className="my-4 grid grid-cols-1 items-start gap-3 md:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          <div>
            <Title
              title={event?.title || null}
              category={event?.Category?.name || null}
            />
            <Metadata />
            <EventDescription description={event?.description || null} />
            <AboutMentor />
            <Organize
              name={event?.Organizer?.name || null}
              link={event?.Organizer?.slug || null}
            />
            <QnA />
          </div>

          <div className="sticky top-4 self-start">
            <img
              src={event?.image}
              className="h-[200px] w-full rounded-[10px] object-cover"
            />
            <RegisterBtn />
            <Capacity />
            <Countdown />
            <div className="mt-3 rounded-[10px] border border-yellow-primer shadow-md">
              <Minimap location={event?.location} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default EventDetailNew;
