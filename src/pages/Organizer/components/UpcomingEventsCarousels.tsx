import Card from "../../../components/Home/Card";
import useEmblaCarousel from "embla-carousel-react";

interface Event {
  id: number;
  image: string;
  description: string;
  startAt: string;
  slug: string;
  title: string;
}

interface Props {
  events: Event[];
}

const UpcomingEventsCarousels = ({ events }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {events.map((event) => (
          <div key={event.id} className="flex-[0_0_320px]">
            <Card
              image={event.image}
              description={event.description}
              startAt={event.startAt}
              slug={event.slug}
              title={event.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsCarousels;
