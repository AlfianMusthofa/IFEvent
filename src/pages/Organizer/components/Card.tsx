import { CalendarDays } from "lucide-react";

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  month: string;
  eventDate: string;
  price: string;
  type: "Online" | "Offline";
}

const Card = ({
  title,
  image,
  date,
  month,
  eventDate,
  type,
  price,
}: EventCardProps) => {
  return (
    <>
      <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        {/* Cover */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
              type === "Online"
                ? "bg-yellow-400 text-black"
                : "bg-slate-900 text-white"
            }`}
          >
            {type}
          </span>
        </div>

        {/* Content */}
        <div className="relative -mt-7 mx-3 rounded-xl bg-white p-4 shadow-md">
          <div className="flex gap-4">
            {/* Date */}
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border">
              <span className="text-3xl font-bold leading-none">{date}</span>
              <span className="text-xs uppercase text-gray-500">{month}</span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="line-clamp-2 text-lg font-bold">{title}</h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={16} />
                {eventDate}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                {price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
