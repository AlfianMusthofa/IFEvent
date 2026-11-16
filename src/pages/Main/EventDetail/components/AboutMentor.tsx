import { useParams } from "react-router-dom";
import { useEventDetail } from "../../hooks/useEventDetail";

const AboutMentor = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");
  return (
    <>
      <div className="rounded-[10px] border border-yellow-primer p-3 shadow-md">
        <h1 className="mb-2 font-medium tracking-wide">About Mentor</h1>

        <div className="mt-1 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left">
          <img
            src={event?.Mentor.image}
            alt={event?.Mentor.name ?? "Mentor"}
            className="h-[100px] w-[100px] shrink-0 rounded-full object-cover"
          />

          <div className="min-w-0">
            <p className="text-[16px]">{event?.Mentor.name}</p>
            <p className="text-[13px]">{event?.Mentor.position}</p>
            <p
              className="break-words text-[13px] font-light"
              dangerouslySetInnerHTML={{
                __html: event?.Mentor.bio || "",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMentor;
