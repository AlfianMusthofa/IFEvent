interface CapacityBarProps {
  registered: number;
  capacity: number;
}

export default function CapacityBar({
  registered,
  capacity,
}: CapacityBarProps) {
  const percentage = Math.min(Math.round((registered / capacity) * 100), 100);

  const seatsLeft = capacity - registered;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold tracking-wide">
          Event Capacity
        </h2>
        <p className="text-[12px] font-medium">
          {registered} / {capacity} participants registered
        </p>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span className="text-[12px]">{seatsLeft} seats left</span>
        <span className="text-[12px]">{percentage}%</span>
      </div>
    </div>
  );
}
