import Card from "../Home/Card";

interface categoryProps {
  name: string;
  events: EventProps[];
}

export interface EventProps {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  startAt: string;
}

const Category: React.FC<categoryProps> = ({ name, events }: categoryProps) => {
  return (
    <>
      <div className="bg-yellow-primer">
        <div className="max-w-[1029px] mx-auto text-white text-[28px] font-semibold py-[13px]">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="max-w-[1029px] mx-auto my-[30px] flex flex-wrap gap-[13px] ">
        {events.length === 0 ? (
          <p className="text-gray-500">No events in this category</p>
        ) : (
          events.map((event) => (
            <Card
              key={event.id}
              image={event.image}
              title={event.title}
              description={event.description}
              slug={event.slug}
              startAt={event.startAt}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Category;
