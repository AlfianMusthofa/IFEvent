import { useEffect, useState } from "react";
import Navbar from "../../../components/Admin/Navbar";
import { API_URL } from "../../../service/api";
import EventMonthlyChart from "../../../components/charts/EventMonthlyChart";
import ParticipantMonthlyChart from "../../../components/charts/ParticipantMonthlyChart";
import UpcomingEvents from "../../../components/Admin/UpcomingEvents";
import Active from "../../../components/StatsCount/active";
import Ended from "../../../components/StatsCount/Ended";
import Pending from "../../../components/StatsCount/Pending";
import Cancelled from "../../../components/StatsCount/Cancelled";

interface UpcomingEventCardProps {
  id: number;
  image: string;
  title: string;
  startAt: string;
}

const Dashboard = () => {
  const [monthlyEvents, setMonthlyEvents] = useState([]);
  const [participantData, setParticipantData] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState<
    UpcomingEventCardProps[]
  >([]);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const res = await fetch(`${API_URL}/events/charts/monthly`);
        const data = await res.json();
        setMonthlyEvents(data.data);
      } catch (error) {
        console.error("Failed fetch monthly events", error);
      }
    };

    const fetchParticipantsData = async () => {
      try {
        const res = await fetch(
          `${API_URL}/events/dashboard/participants/monthly`,
        );
        const data = await res.json();
        setParticipantData(data.data);
      } catch (error) {
        console.error("Failed fetch participants", error);
      }
    };

    const fetchUpcomingEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/events/upcoming`);
        const data = await res.json();
        setUpcomingEvents(data.data);
      } catch (error) {}
    };

    fetchUpcomingEvents();
    fetchEventsData();
    fetchParticipantsData();
  }, []);

  return (
    <>
      <Navbar path="Dashboard" />
      <div className="mt-3 flex items-center justify-between gap-3">
        <Active />
        <Ended />
        <Pending />
        <Cancelled />
      </div>
      <div className="mt-3 bg-white px-5 py-3 rounded-[5px] shadow-sm">
        <h1 className="font-medium tracking-wide">Upcoming Events</h1>
        <div className="my-3 flex">
          {upcomingEvents.map((event) => (
            <UpcomingEvents
              key={event.id}
              image={event?.image}
              title={event?.title}
              date={event?.startAt}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <div className="mt-3 flex-1 bg-white h-[250px] w-[450px] p-3 rounded-[5px] shadow-sm">
          <EventMonthlyChart apiData={monthlyEvents} />
        </div>
        <div className="mt-3 flex-1 bg-white h-[250px] w-[450px] p-3 rounded-[5px] shadow-sm">
          <ParticipantMonthlyChart apiData={participantData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
