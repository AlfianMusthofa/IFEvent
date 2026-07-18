import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface LiveChatButtonProps {
  onClick: () => void;
}

const LiveChatButton = ({ onClick }: LiveChatButtonProps) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ai-chat-prompt")) return;

    const timer = setTimeout(() => {
      setShowPrompt(true);
      sessionStorage.setItem("ai-chat-prompt", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowPrompt(false);
    onClick();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showPrompt && (
        <div className="relative max-w-[260px] rounded-xl bg-white p-4 shadow-xl border border-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowPrompt(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={14} />
          </button>

          <p className="pr-5 text-sm text-gray-700">
            👋 Halo! Kalau butuh bantuan atau ingin bertanya, langsung chat AI
            saja ya.
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        aria-label="Open AI Chat"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-yellow-secondary
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
          active:scale-95
        "
      >
        <MessageCircle size={25} />
      </button>
    </div>
  );
};

export default LiveChatButton;
