import { useParams } from "react-router-dom";
import { useEventDetail } from "../../hooks/useEventDetail";

const AboutMentor = () => {
  const { slug } = useParams();
  const { event } = useEventDetail(slug ?? "");
  return (
    <>
      <div className="border p-3 rounded-[10px] shadow-md border-yellow-primer">
        <h1 className="tracking-wide font-medium mb-2">About Mentor</h1>
        <div className="mt-1 flex gap-4 items-center">
          <img
            src={event?.Mentor.image}
            className="w-[100px] h-[100px] rounded-full"
          />
          <div>
            <p className="text-[16px]">{event?.Mentor.name}</p>
            <p className="text-[13px]">{event?.Mentor.position}</p>
            <p
              className="text-[13px] font-light"
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
