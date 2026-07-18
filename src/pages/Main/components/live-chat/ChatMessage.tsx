import { Bot, User } from "lucide-react";
import type { ChatMessageType } from "./types";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar AI */}
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-secondary text-white">
          <Bot size={16} />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm break-words ${
          isUser
            ? "rounded-br-md bg-yellow-secondary text-white"
            : "rounded-bl-md bg-white text-gray-800 shadow-sm border border-gray-200"
        }`}
      >
        {message.content}

        <div
          className={`mt-1 text-[10px] ${
            isUser ? "text-white/70" : "text-gray-400"
          }`}
        >
          {message.createdAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Avatar User */}
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-700">
          <User size={16} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
