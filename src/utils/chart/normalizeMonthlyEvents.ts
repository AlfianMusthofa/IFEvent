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

type ApiMonthlyData = {
  month: number;
  total: number;
};

export const normalizeMonthlyEvents = (apiData: ApiMonthlyData[]) => {
  const map = new Map<number, number>(
    apiData.map((item) => [item.month, item.total]),
  );

  return {
    labels: MONTHS,
    data: MONTHS.map((_, index) => map.get(index + 1) || 0),
  };
};
