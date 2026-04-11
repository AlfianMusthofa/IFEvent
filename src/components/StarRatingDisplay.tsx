import { Star } from "lucide-react";

const StarRatingDisplay = ({ rating }: { rating: number }) => {
  return (
    <>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default StarRatingDisplay;
