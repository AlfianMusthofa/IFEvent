import { useState, KeyboardEvent } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text || disabled) return;

    onSend(text);
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-3">
      <div className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 focus-within:border-yellow-secondary focus-within:ring-2 focus-within:ring-yellow-secondary/20">
        <input
          type="text"
          placeholder="Tulis pesan..."
          value={message}
          disabled={disabled}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
        />

        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-yellow-secondary
            text-white
            transition
            hover:opacity-90
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
