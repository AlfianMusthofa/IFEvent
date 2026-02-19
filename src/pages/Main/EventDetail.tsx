import Navbar from "../../components/navbar";
import PP from "../../assets/raw.png";
import Person from "../../assets/person.jpg";
// import CardPayment from "../../components/EventDetail/CardPayment"
import Syllabus from "../../components/Home/Syllabus";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { API_URL } from "../../service/api";
import { useParams } from "react-router-dom";

interface EventProps {
  title: string;
  location: string;
  description: string;
  image: string;
  bio: string;
  position: string;
  mentor: string;
  mentorImage: string;
}

const EventDetail = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState<EventProps>();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`${API_URL}/events/slug/${slug}`);
      const data = await res.json();
      console.log(data);
      setEvent(data);
    };

    fetchEvent();
  }, [slug]);

  return (
    <>
      <Navbar />
      {/* Judul */}
      <div className="bg-yellow-light">
        <div className="max-w-[1029px] mx-auto py-[30px]">
          <div className="flex items-center justify-between">
            <div className="col max-w-[550px]">
              <h3 className="text-[29px] leading-[35px] font-medium text-black">
                {event?.title}
              </h3>
              <div className="mt-[15px] text-light-grey text-[14px]">
                <p>3 Pertemuan</p>
                <p className="my-1.5">26 - 27 December 2024</p>
                <p>{event?.location}</p>
                <button className="bg-yellow-primer font-medium text-black px-10 py-2 rounded-md mt-3">
                  Join
                </button>
              </div>
            </div>
            <img
              src={event?.image}
              className="w-[300px] h-[180px] rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* Alasan */}
      <div className="max-w-[1029px] mx-auto flex justify-between gap-[20px] py-[30px]">
        <div className="col w-[700px]">
          <h3 className="text-black font-semibold text-[20px]">
            Why should you take part in this event?
          </h3>
          <p className="text-[14px] mt-[10px]">{event?.description}</p>
        </div>
        <div className="col w-[600px]">
          <h3 className="text-black font-semibold text-[20px]">
            what's going on at this event?
          </h3>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-[17px] font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                hic ad repudiandae explicabo asperiores ut nobis aperiam soluta.
                Nemo, ipsam!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-[17px] font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                porro doloremque ipsum molestias consectetur. Quasi eos omnis ab
                natus fugit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-[17px] font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid omnis atque at suscipit facilis fuga placeat. Molestiae
                praesentium beatae impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mentor */}
      <div className="bg-yellow-light flex justify-center py-[30px] gap-[50px] items-center">
        <img src={event?.mentorImage} className="w-[140px] rounded-full" />
        <div className="max-w-[600px] flex flex-col gap-[3px]">
          <h3 className="text-[19px] font-medium text-black">
            {event?.mentor}
          </h3>
          <p className="text-[14px] text-light-grey">{event?.position}</p>
          <p className="text-[14px]">{event?.bio}</p>
        </div>
      </div>
      <div className="div mt-[20px] py-[30px]">
        <div className="max-w-[1029px] mx-auto flex gap-[20px]">
          <Syllabus />
          <div className="w-full flex flex-col gap-[20px]">
            <div className="col">
              <p className="text-[15px] font-medium mb-[5px]">
                necessary equipment
              </p>
              <ul className="list-disc text-[14px] ml-[40px] flex flex-col gap-[3px]">
                <li>Internet Connection</li>
                <li>Zoom</li>
                <li>Laptop</li>
              </ul>
            </div>
            <div className="col">
              <p className="text-[15px] font-medium mb-[5px]">
                Important Notes
              </p>
              <ul className="list-disc text-[14px] ml-[40px] flex flex-col gap-[3px]">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio, reiciendis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Unde, amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas debitis itaque, fugit sequi obcaecati culpa.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  officiis ratione at? Autem commodi qui illo earum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
