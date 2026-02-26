export const formatEventDate = (startAt?: string) => {
  if (!startAt) return "-";

  return new Date(startAt).toLocaleString("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const formatDateTime = (isoString: any) => {
  const date = new Date(isoString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    date: formattedDate, // 02/26/2026
    time: formattedTime.replace(":", "."), // 01.00 PM
  };
};

export const formatForInput = (isoString: any) => {
  const d = new Date(isoString);

  const date = d.toISOString().split("T")[0]; // YYYY-MM-DD
  const time = d.toTimeString().slice(0, 5); // HH:mm (local)

  return { date, time };
};
