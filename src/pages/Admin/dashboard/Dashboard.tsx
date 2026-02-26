import EventStats from "../../../components/Admin/EventState";
import Navbar from "../../../components/Admin/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar path="Dashboard" />
      <div className="mt-3">
        <EventStats />
      </div>
    </>
  );
};

export default Dashboard;
