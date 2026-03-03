import { Line } from "react-chartjs-2";
import { normalizeMonthlyData } from "../../utils/chart/normalizeMonthlyData";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ParticipantMonthlyChart = ({ apiData }: any) => {
  const data = {
    labels: MONTHS,
    datasets: [
      {
        label: "Participants",
        data: normalizeMonthlyData(apiData),
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ParticipantMonthlyChart;
