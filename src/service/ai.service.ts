const API_URL = import.meta.env.VITE_API_URL;

export async function chatWithAI(message: string) {
  const response = await fetch(`${API_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "AI request failed");
  }

  return data.reply as string;
}
