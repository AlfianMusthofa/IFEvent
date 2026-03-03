import { Bar } from "react-chartjs-2";
import { normalizeMonthlyEvents } from "../../utils/chart/normalizeMonthlyEvents";

type Props = {
  apiData: { month: number; total: number }[];
};

const EventMonthlyChart = ({ apiData }: Props) => {
  const normalized = normalizeMonthlyEvents(apiData);

  const data = {
    labels: normalized.labels,
    datasets: [
      {
        label: "Events Created",
        data: normalized.data,
        backgroundColor: "#2563eb",
        borderRadius: 1, // 🔥 rounded bar
        maxBarThickness: 40, // 🔥 biar gak kegedean
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} events`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default EventMonthlyChart;
