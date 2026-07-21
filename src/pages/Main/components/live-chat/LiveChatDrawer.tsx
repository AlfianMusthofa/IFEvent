import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import type { ChatMessageType } from "./types";
import { chatWithAI } from "../../../../service/ai.service";

interface LiveChatDrawerProps {
  open: boolean;
  onClose: () => void;
}

const LiveChatDrawer = ({ open, onClose }: LiveChatDrawerProps) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "Halo 👋 Saya MinHub. Ada yang bisa saya bantu hari ini?",
      createdAt: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const reply = await chatWithAI(text);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply,
          createdAt: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Maaf, terjadi kesalahan. Silakan coba lagi.",
          createdAt: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className={`
        fixed
        bottom-24
        right-6
        z-50
        flex
        h-[550px]
        w-[360px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-2xl
        transition-all
        duration-300
        ${
          open
            ? "translate-y-0 opacity-100 scale-100"
            : "pointer-events-none translate-y-4 opacity-0 scale-95"
        }
      `}
    >
      <ChatHeader onClose={onClose} />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
};

export default LiveChatDrawer;
