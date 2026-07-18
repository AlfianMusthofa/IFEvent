import { Bot, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-yellow-secondary px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <Bot size={22} />
        </div>

        <div>
          <h2 className="text-sm font-semibold">AI Assistant</h2>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-xs text-white/90">Online</span>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        aria-label="Close chat"
        className="rounded-lg p-2 transition hover:bg-white/20"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default ChatHeader;
