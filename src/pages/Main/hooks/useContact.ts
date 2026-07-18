import { useState } from "react";
import { toast } from "react-toastify";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const useContact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMessage = async () => {
    e.preventDefault();

    const toastId = toast.loading("Loading...");

    try {
      const response = await fetch("http://localhost:3000/email/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message!");
      }

      toast.update(toastId, {
        render: data.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.update(toastId, {
        render: error instanceof Error ? error.message : "Something wrong.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      console.error(error);
    }
  };

  return {
    form,
    handleChange,
    sendMessage,
  };
};
