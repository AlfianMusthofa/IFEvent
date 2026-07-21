import { toast } from "react-toastify";
import { API_URL } from "../../../service/api";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const useContact = () => {
  const sendButton = async (payload: ContactPayload) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await fetch(`${API_URL}/email/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.update(toastId, {
        render: "Message success!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });

      return await response.json();
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: "Failed to deliver",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      throw error;
    }
  };

  return { sendButton };
};
