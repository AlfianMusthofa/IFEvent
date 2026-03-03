import { Bar } from "react-chartjs-2";
import { transformCategoryData } from "../../utils/chart/eventByCategory";

const EventByCategoryChart = ({ categories }: any) => {
  const chartData = transformCategoryData(categories);

  const data = {
    labels: chartData.map((item: any) => item.category),
    datasets: [
      {
        label: "Total Events",
        data: chartData.map((item: any) => item.total),
        backgroundColor: "rgba(37,99,235,0.6)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default EventByCategoryChart;
