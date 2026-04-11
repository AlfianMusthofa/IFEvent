import Navbar from "../../../components/Admin/Navbar";
import EventMonthlyChart from "../../../components/charts/EventMonthlyChart";
import ParticipantMonthlyChart from "../../../components/charts/ParticipantMonthlyChart";
import UpcomingEvents from "../../../components/Admin/UpcomingEvents";
import Active from "../../../components/StatsCount/Active";
import Ended from "../../../components/StatsCount/Ended";
import Pending from "../../../components/StatsCount/Pending";
import Cancelled from "../../../components/StatsCount/Cancelled";
import StarRatingDisplay from "../../../components/StarRatingDisplay";
import Avatar from "../../../assets/icons/userAvatar.png";
import {
  GetParticipants,
  GetReviews,
  GetUpcomingEvents,
  useGetMontlyEvents,
} from "./hook/useDashboard";

const Dashboard = () => {
  const { monthlyEvents } = useGetMontlyEvents();
  const { participantData } = GetParticipants();
  const { upcomingEvents } = GetUpcomingEvents();
  const { reviews } = GetReviews();

  return (
    <>
      <Navbar path="Dashboard" />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <Active />
          <Ended />
          <Pending />
          <Cancelled />
        </div>
        <div className="flex mt-3 gap-3">
          <div className=" flex-1 bg-white px-5 py-3 rounded-[5px] shadow-sm">
            <h1 className="font-medium tracking-wide">Upcoming Events</h1>
            <div className="my-2 flex flex-col  gap-2">
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
          <div className="bg-white px-5 py-3 rounded-[5px] shadow-sm">
            Recent Review
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
        <div className="bg-white mt-3 px-5 py-3 rounded-[5px] shadow-sm ">
          <p className="font-medium tracking-wide">Recent Review</p>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {reviews.map((review) => (
              <div
                className="border p-3 rounded-[10px] shadow-md"
                key={review.id}
              >
                <StarRatingDisplay rating={review.rating} />
                <p className="text-[12px] my-2">Event: {review.event.title}</p>
                <p className="text-[14px] italic line-clamp-3 mb-3">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={review?.user?.image || Avatar}
                    alt="Avatar"
                    className="w-9 h-9 rounded-full"
                  />
                  <span className="text-[14px]">{review.user.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
