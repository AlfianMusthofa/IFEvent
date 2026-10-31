import { Award, CalendarCheck, Star, Trophy } from "lucide-react";

function StatCard({ title, value, description, icon: Icon, iconClass }: any) {
  return (
    <div className="group rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            {value}
          </h3>
          <p className="mt-2 text-xs text-gray-400">{description}</p>
        </div>
        <div className={`rounded-xl p-3 ${iconClass}`}>
          <Icon size={22} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

interface StatisticProps {
  eventJoined: number;
  eventReviewed: number;
  totalPoints: number;
  certificates: number;
}

const Statistic = ({
  eventJoined,
  eventReviewed,
  totalPoints,
  certificates,
}: StatisticProps) => {
  return (
    <>
      <section className="mb-9">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Your Overview</h2>
          <p className="mt-1 text-sm text-gray-500">
            A summary of your activity on SAKTIEvent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Points"
            value={totalPoints}
            description="Points collected"
            icon={Trophy}
            iconClass="bg-[#FFF5B8] text-[#9B7800]"
          />
          <StatCard
            title="Event Joined"
            value={eventJoined}
            description="Events participated"
            icon={CalendarCheck}
            iconClass="bg-blue-50 text-blue-600"
          />
          <StatCard
            title="Event Reviewed"
            value={eventReviewed}
            description="Feedback submitted"
            icon={Star}
            iconClass="bg-purple-50 text-purple-600"
          />
          <StatCard
            title="Certificates"
            value={certificates}
            description="Achievements earned"
            icon={Award}
            iconClass="bg-green-50 text-green-600"
          />
        </div>
      </section>
    </>
  );
};

export default Statistic;
