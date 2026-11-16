import { useState } from "react";

type EventDescriptionProps = {
  description: string | null;
};

const EventDescription = ({ description }: EventDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border p-3 rounded-[10px] mb-3 shadow-md border-yellow-primer">
      <p className="tracking-wide font-medium mb-1.5">About this event</p>
      <p
        className={`
                              text-[14px] font-light tracking-wide
                              [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1
                              ${expanded ? "" : "line-clamp-4"}
                           `}
        dangerouslySetInnerHTML={{
          __html: description ?? "",
        }}
      />

      {/* BUTTON */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-1 text-sm text-blue-600 hover:underline"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default EventDescription;
