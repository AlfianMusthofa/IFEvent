import { useParams } from "react-router-dom";
import { useOrganizer } from "../hooks/useOrganizer";

const About = () => {
  const { slug } = useParams();

  const { data } = useOrganizer(slug ?? "");

  return (
    <>
      <h2 className="font-medium mb-1 text-[19px]">Evelate Community</h2>
      <p className="text-[14px]">{data?.about ?? "ss"}</p>
    </>
  );
};

export default About;
