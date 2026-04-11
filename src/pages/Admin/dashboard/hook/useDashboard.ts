import { useEffect, useState } from "react";

const ApiUrl = import.meta.env.VITE_API_URL;

export const useGetMontlyEvents = () => {
  const [monthlyEvents, setMonthlyEvents] = useState([]);

  const fetchEventsData = async () => {
    try {
      const res = await fetch(`${ApiUrl}/events/charts/monthly`);
      const data = await res.json();
      setMonthlyEvents(data.data);
    } catch (error) {
      console.error("Failed fetch monthly events", error);
    }
  };

  useEffect(() => {
    fetchEventsData();
  }, []);

  return { monthlyEvents };
};

export const GetParticipants = () => {
  const [participantData, setParticipantData] = useState([]);
  const fetchParticipantsData = async () => {
    try {
      const res = await fetch(
        `${ApiUrl}/events/dashboard/participants/monthly`,
      );
      const data = await res.json();
      setParticipantData(data.data);
    } catch (error) {
      console.error("Failed fetch participants", error);
    }
  };

  useEffect(() => {
    fetchParticipantsData();
  }, []);

  return { participantData };
};

interface UpcomingEventCardProps {
  id: number;
  image: string;
  title: string;
  startAt: string;
}

export const GetUpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<
    UpcomingEventCardProps[]
  >([]);

  const fetchUpcomingEvents = async () => {
    try {
      const res = await fetch(`${ApiUrl}/events/upcoming?limit=2`);
      const data = await res.json();
      setUpcomingEvents(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

  return { upcomingEvents };
};

export const GetReviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch(`${ApiUrl}/reviews?limit=3`);
    const data = await res.json();
    setReviews(data.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return { reviews };
};
