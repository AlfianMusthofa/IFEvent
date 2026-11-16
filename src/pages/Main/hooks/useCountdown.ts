import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (
  targetDate?: string | Date,
): TimeLeft | null => {
  if (!targetDate) return null;

  const targetTime = new Date(targetDate).getTime();
  if (!Number.isFinite(targetTime)) return null;

  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export function useCountdown(targetDate?: string | Date) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
    if (!targetDate) return;

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
