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

export const normalizeMonthlyData = (apiData: any) => {
  const map = new Map(apiData.map((item: any) => [item.month, item.total]));

  return MONTHS.map((_, index) => map.get(index + 1) || 0);
};
