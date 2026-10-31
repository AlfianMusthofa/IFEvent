import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { useCheckMyReview } from "./hook/useReview";
import { useHistory } from "./hook/useHistory";
import Statistic from "./components/statistic";
import ProfileCard from "./components/profileCard";
import HistoryEvents from "./components/historyEvents";

const UserDashboard = () => {
  const { events, count } = useHistory();

  const { totalReviews } = useCheckMyReview(events);

  return (
    <>
      <Navbar />
      <div className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          <ProfileCard />
          <div className="bg-gray-300 h-[1px] my-5"></div>
          <Statistic
            certificates={0}
            eventJoined={count || 0}
            totalPoints={10}
            eventReviewed={totalReviews || 0}
          />

          <HistoryEvents />
        </div>

        <div className="pt-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
